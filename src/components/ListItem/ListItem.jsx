import React from 'react';
import PropTypes from 'prop-types';
import Note from '../Note/Note';

export default function ListItem(props) {
  const { className, item, onDeleteItem } = props;

  return (
    <li className={className}>
      <Note item={item} onDeleteItem={() => onDeleteItem(item.id)} />
    </li>
  );
}

ListItem.propTypes = {
  className: PropTypes.string,
  item: PropTypes.object.isRequired,
};
