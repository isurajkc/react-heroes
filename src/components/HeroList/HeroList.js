import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Search from "components/search";

class HeroList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heroes: [],
      searchKeyword: '',
      searchedHeroes: []
    };
    this.apiUrl = "http://localhost:4000/superheros";
  }

  componentDidMount() {
    this.getMockHeroData();
  }

  async getMockHeroData() {
    var heroes = await fetch(this.apiUrl)
      .then(res => res.json())
      .then(data => {
        return data.reverse();
      });

      this.setState({
        heroes,
        searchedHeroes: heroes,
      });
  }

  handleDelete = async id => {
    await fetch(`http://localhost:4000/superheros/${id}`,
      { method: "DELETE" },
    );
    const heroes = this.state.heroes;
    const position = heroes.findIndex(hero => id === hero.id);
    heroes.splice(position, 1);
    this.setState({ heroes });
  };

  onSearch = e => {
    const value = e.target.value;
    let searchedHeroes = this.state.heroes;
    console.log(value);

    if(value){
      searchedHeroes = searchedHeroes.filter(hero => {
        const name = hero.name.toLowerCase();
        return name.match(value.toLowerCase());
      });
    }

    this.setState({ searchedHeroes, searchKeyword: e.target.value });
  };

  render() {
    const { searchedHeroes: heroes, searchKeyword } = this.state;
    const reversedHeores = heroes.reverse();
    return (
      <Fragment>
        <Search value={searchKeyword} onSearch={this.onSearch} />
        <ul className="heroes">
          {reversedHeores.reverse().map((hero, index) => (
            <li key={index} className="hero">
              <img src={require(`../../images/${hero.avatar}`)} />
              <div style={{ flex: 1 }}>
                <b>{hero.name}</b>
                <p>Real name: {hero.realName}</p>
                <p>Super powers: {hero.superPowers}</p>
              </div>
              <button className="remove-button" onClick={() => this.handleDelete(hero.id)}>
                <i className="fa fa-trash"></i>
              </button>
            </li>
          ))}
        </ul>
      </Fragment>
    );
  }
}

export default HeroList;
