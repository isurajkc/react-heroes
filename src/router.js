import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home, Heroes, HeroDetail } from "screens";

class Router extends Component {
  render() {
    return (
      <div className="container">
        <aside>
          <h1><a href="/" className="logo">
            <small>Tour of </small>
            Super<span>heroes</span>
          </a></h1>
        </aside>
        <Heroes />
      </div>
    );
  }
}

export default Router;
