import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { HeroForm, HeroList, Search } from "components";
import Add from "components/add";

class Heroes extends Component {
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

  getMockHeroData() {
    fetch(this.apiUrl)
      .then(res => res.json())
      .then(data => {
        this.setState({
          heroes: data,
          searchedHeroes: data,
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
    const { heroes, searchKeyword, searchedHeroes } = this.state;

    return (
      <BrowserRouter> 
        <section className="content">
          <Switch>
            <Route exact path="/" component={HeroList} />
            <Route exact path="/add" component={Add} />
          </Switch>
          <Route exact path="/" render={() => <Link to="/add" className="add-button"><span>+</span></Link>} />
        </section>
      </BrowserRouter>
    );
  }
}

export default Heroes;
