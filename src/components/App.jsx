import React, { Component } from 'react';
import { MaterialEditorForm } from './MaterialEditorForm/MaterialEditorForm';
import * as API from 'services/api';
import {MaterialList} from './MaterialList/MaterialList'

class App extends Component {
  state = {
    materials: [],
    isLoading: false,
    error: false,
  };

  async componentDidMount() {
    try {
      this.setState({ isLoading: true });
const materials = await API.getMaterials();
    this.setState({ materials, isLoading: false });
    } catch (error) {
      this.setState({ error: true, isLoading: false });
      console.log(error);
    }
    
  };

  addMaterial = async (values) => {
    try {
      const material = await API.addMaterial(values);
      this.setState(state => ({
        materials: [...state.materials, material],
      }));
    } catch (error) {
      this.setState({ error: true, isLoading: false });
      console.log(error);
    }
  };

  deleteMaterial = async id => {
    try {
      await API.deleteMaterial(id);
    this.setState(state => ({
      materials: state.materials.filter(material => material.id !== id),
    }));
    } catch (error) {
      this.setState({ error: true })
      console.log(error);
    }
  };

  updateMaterial = async fields => {
    try {
 const updatedMaterial = await API.updateMaterial(fields);
    this.setState(state => ({
      materials: state.materials.map(material =>
        material.id === fields.id ? updatedMaterial : material),
    }));
    } catch (error) {
      this.setState({ error: true });
      console.log(error);
    }
   
  }
    
  render() {
    const { materials, isLoading, error } = this.state;
      return (
        <div>
          {error && (
            <p>
              Ooops, something went wrong :( Reload, please, site and try again :(
            </p>
          )}
          <MaterialEditorForm onSubmit={this.addMaterial} />
          {isLoading ? 'Loading materials' : <MaterialList items={materials}
            onDelete={this.deleteMaterial}
            onUpdate={this.updateMaterial}/>}
         
        </div>
      );
    }
}

export default App;