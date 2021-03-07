import React from 'react';
import PropTypes from 'prop-types';

export default function Note(props) {
  const { item, onDeleteItem } = props;

  return (
    <React.Fragment>
      <p className="note__content">{item.content}</p>
      <i className="note__delete material-icons" onClick={() => onDeleteItem(item.id)}>close</i>
    </React.Fragment>
  );
}

Note.propTypes = {
  item: PropTypes.object.isRequired,
  onDeleteItem: PropTypes.func.isRequired,
};
