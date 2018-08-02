import React, { Component } from 'react'

export default class Add extends Component {
  state = {
    loading: false,
    name: '',
    realName: '',
    superPowers: '',
    avatar: '',
  }
  

  add = async () => {
    const { loading, name, realName, superPowers, avatar } = this.state;
    this.setState({ loading: true });
    const data = { name, realName, superPowers, avatar };
    const { history } = this.props;
    await fetch(
      "http://localhost:4000/superheros",
      { method: "POST", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) },
    );

    history.push('/');
  }

  onChangeName = e => {
    const name = e.target.value;
    this.setState({ name });
  }

  onChangeRealName = e => {
    const realName = e.target.value;
    this.setState({ realName });
  }

  onChangePowers = e => {
    const superPowers = e.target.value;
    this.setState({ superPowers });
  }

  onChangeAvatar = e => {
    const avatar = e.target.value;
    this.setState({ avatar });
  }

  goBack = () => {
    this.props.history.goBack();
  }

  render() {
    const { loading, name, realName, superPowers, avatar } = this.state;
    return (
      <div>
        <button onClick={this.goBack} className="back-button">
          <span>&larr;</span> Superheroes
        </button>
        <h2>Add new superhero</h2>
        <div className="field">
          <label>Name </label>
          <input type="text" value={name} onChange={this.onChangeName} className="input-fields"/>
        </div>
        <div className="field">
          <label>Real name </label>
          <input type="text" value={realName} onChange={this.onChangeRealName} className="input-fields"/>
        </div>
        <div className="field">
          <label>Super powers </label>
          <input type="text" value={superPowers} onChange={this.onChangePowers} className="input-fields"/>
        </div>
        <div className="field">
          <label>Avatar </label>
          <input type="text" value={avatar} onChange={this.onChangeAvatar} className="input-fields"/>
        </div>
        <button onClick={this.add} disabled={loading} className="submit-button">
          <span>{loading ? 'Adding...': 'Add'}</span>
        </button>
      </div>
    )
  }
}
