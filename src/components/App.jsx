import React, { Component } from 'react';
import { MaterialEditorForm } from './MaterialEditorForm/MaterialEditorForm';
import * as API from 'services/api';

class App extends Component {
  state = {
    materials: [],
  };

  addMaterial = async (values) => {
    const material = await API.addMaterial(values);
    this.setState(state => ({
      materials: [...state.materials, material]
    }));
}
    render() {
      return (
        <div>
          <MaterialEditorForm onSubmit={this.addMaterial}/>
        </div>
      );
    }
}

export default App;