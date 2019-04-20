import { Color } from 'csstype';
import React, { FC } from 'react';
import { compose, withState } from 'recompose';
import './App.css';
import withColor from './withColor';

export interface AppProps {
  name: string;
  setName: (name: string) => string;
  color: Color;
}

const App: FC<AppProps> = ({ name, setName, color }) => {
  return (
    <form className="App" style={{ color }}>
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

export default compose<AppProps, {}>(
  withState('name', 'setName', 'Jake'),
  withColor('blue'),
)(App);
