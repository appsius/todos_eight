import React from 'react';
import { TextField, Paper } from '@material-ui/core';
import useInputState from './hooks/useInputState';

export default function TodoForm({ addTodo }) {
  const [value, handleChange, reset] = useInputState('');
  return (
    <Paper>
      <form
        onSubmit={e => {
          e.preventDefault();
          addTodo(value);
          reset();
        }}
      >
        <TextField value={value} onChange={handleChange} />
      </form>
    </Paper>
  );
}