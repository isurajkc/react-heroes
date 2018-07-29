import React, { Component } from "react";
import { HeroForm, HeroList, HeroSearch } from "components";

class Heroes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heroes: [],
      searchResults: []
    };
    this.apiUrl = "http://5b4addaf30ebac001419f251.mockapi.io/api/messages";
  }

  componentDidMount() {
    this.getMockHeroData();
  }

  getMockHeroData() {
    fetch(this.apiUrl)
      .then(res => res.json())
      .then(data => {
        console.log("data:", data);
        this.setState({
          heroes: data
        });
      });
  }

  addHero = val => {
    if (val) {
      const heroes = this.state.heroes;
      const lastId = heroes[heroes.length - 1].id;
      const newHero = { id: parseInt(lastId) + 1, name: val };

      heroes.push(newHero);
      this.setState({ heroes });
    }
  };

  deleteHero = val => {
    const heroes = this.state.heroes;
    const position = heroes.findIndex(hero => val === hero.id);
    console.log(position);
    heroes.splice(position, 1);
    this.setState({ heroes });
  };

  search = e => {
    const heroes = this.state.heroes;

    const searchResults = heroes.filter(hero => {
      const name = hero.name.toLowerCase();
      return name.match(e.target.value.toLowerCase());
    });

    this.setState({ searchResults: searchResults });
  };

  render() {
    const { heroes, searchResults } = this.state;

    return (
      <section>
        <HeroSearch search={this.search} searchResults={searchResults} />
        <HeroForm addHero={this.addHero} />
        <HeroList heroes={heroes} deleteItem={this.deleteHero} />
      </section>
    );
  }
}

export default Heroes;
