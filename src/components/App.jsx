import React, { Component } from 'react';


class App extends Component {
  state = {
    page: 1,
    query: '',
    items: [],
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      page: 1, 
      query: e.target.elements.query.value,
      items: [],
    })
    e.target.reset();
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  }

  componentDidUpdate(_, prevState) {

    if (prevState !== this.state.page || prevState.query !== this.state.query) {
      console.log("Fetch data");
    }
  };
  
    
  render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <input type="text" name="query" />
            <button type="submit">Search</button>
          </form>
          
          <button onClick={this.loadMore}>Load more</button>
        </div>
      );
    }
}

export default App;