import React, { Component } from 'react';
import Form from '../Form/Form';
import List from '../List/List';
import ListItem from '../ListItem/ListItem';

export default class NotesWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  handleSubmit = (event) => {
    if (!event.content.trim()) return;
    event.id = 0;
    fetch(process.env.REACT_APP_NOTES_URL, {
      method: 'POST',
      body: JSON.stringify(event),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(() => this.getData());
  }

  handleDeleteItem = (event) => {
    fetch(`${process.env.REACT_APP_NOTES_URL}/${event}`, {
      method: 'DELETE',
    })
      .then(() => this.getData());
  }

  getData = () => {
    fetch(process.env.REACT_APP_NOTES_URL)
      .then((response) => response.json())
      .then((result) => this.setState({ data: result }));
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <React.Fragment>
        <div className="header">
          <span className="header__text">Notes</span>
          <i className="material-icons update__icon" onClick={() => this.getData()}>loop</i>
        </div>
        <List className='list__items' data={this.state.data}>
          {() => this.state.data.map((item) =>
            <ListItem key={item.id} className='list__item' item={item} onDeleteItem={this.handleDeleteItem} />)}
        </List>
        <Form onHandleSubmit={this.handleSubmit} />
      </React.Fragment >
    );
  }
}
