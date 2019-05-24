import React, {Component} from 'react';

export default  class ItemAddForm extends Component {

  render() {

    return (
      <div className="item-add-form">
        <input type="text" />
        <button type="button"
          className="btn btn-outline-secondary"
          onClick={() => this.props.onItemAdded('Hello World')}> Add Item</button>
      </div>
    )
  }
}
