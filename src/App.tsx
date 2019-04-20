import React, { FC } from 'react';
import { withState } from 'recompose';
import './App.css';

export interface AppProps {
  name: string;
  setName: (name: string) => string;
}

const App: FC<AppProps> = ({ name, setName }) => {
  return (
    <form className="App">
      <label>
        Name:{' '}
        <input
          type="text"
          value={name}
          onChange={({ target: { value } }) => setName(value)}
        />
      </label>
    </form>
  );
};

export default withState('name', 'setName', 'Jake')(App);
