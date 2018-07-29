import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home, Heroes, HeroDetail } from "screens";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <header>
            <h1>
              <a href="/">Tour of Heroes</a>
            </h1>
          </header>

          <Switch>
            <Route exact path="/" component={Heroes} />
            <Route exact path="/heroes" component={Heroes} />
            <Route exact path="/heroes/:id" component={HeroDetail} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Router;
