import React, { Component } from "react";

class HeroForm extends Component {
  state = {};

  onSubmit = e => {
    e.preventDefault();
    this.props.addHero(this.inputName.value);
    this.inputName.value = "";
  };

  render() {
    return (
      <form>
        <div className="form--add-hero">
          <label htmlFor="add-hero" className="for">
            Hero Name
          </label>
          <input
            type="text"
            ref={c => {
              this.inputName = c;
            }}
          />
          <button onClick={this.onSubmit}>Add</button>
        </div>
      </form>
    );
  }
}

export default HeroForm;
