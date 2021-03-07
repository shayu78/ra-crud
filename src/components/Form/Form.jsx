import React, { useState } from 'react';
import PropTypes from 'prop-types';

const DEFAULT_FORM_VALUE = {
  content: '',
};

export default function Form(props) {
  const { onHandleSubmit } = props;
  const [form, setForm] = useState(DEFAULT_FORM_VALUE);

  const onSubmit = (event) => {
    event.preventDefault();
    onHandleSubmit(form);
    setForm(DEFAULT_FORM_VALUE);
  }

  const onInputChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <label className="form__label" htmlFor="content">New Note</label>
      <textarea className="form__ta" name='content' onChange={onInputChange} value={form.content} />
      <button className="material-icons form__button">send</button>
    </form>
  );
}

Form.propTypes = {
  onHandleSubmit: PropTypes.func.isRequired,
};
