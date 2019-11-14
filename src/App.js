import React from 'react';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import Router from './routes';
import './App.css';

function App() {
  return (
    <div className="App">
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Router />
      </MuiPickersUtilsProvider>
    </div>
  );
}

export default App;
