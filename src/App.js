import './App.css';
import { Component } from 'react';
import { CardList } from './components/card-list/card-list.components.jsx';
import { SearchBox } from './components/search/search.components.jsx';

class App extends Component {
  constructor() {
    super();

    this.state = {
      Monsters: [],
      searchField: ''
    }
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(user => this.setState({ Monsters: user }))
  }

  render() {
    const { Monsters, searchField } = this.state;
    const filterMonsters = Monsters.filter(el =>
      el.name.includes(searchField)
    )

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="search Monster"
          handleChange={(e) => this.setState({ searchField: e.target.value })} />

        <CardList Monsters={filterMonsters} />

      </div>
    )
  }
}

export default App;




