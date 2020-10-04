import React from 'react';
import Application from './components/Application';
import LeftMenu from './components/LeftMenu';
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import TextField from '@material-ui/core/TextField';
import Grid from "@material-ui/core/Grid";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useHistory,
  useLocation,
  Link,
} from "react-router-dom";

import './App.css'

function App() {
  return (
    <div className="App"  >
      <div className="Filter" >
        <div className="GreyDiv" >
          <Grid item xs={12} sm={6} className="Search">

            <TextField fullWidth variant="outlined" label="Kelime veya Kurum Adı ile ara "
            />
          </Grid>
          <Grid item xs={12} sm={6} className="Search" style={{ marginLeft: '29%' }}>

            <TextField fullWidth variant="outlined" label="Ülkelere göre ara"
            />
          </Grid>
          <Grid item xs={12} sm={6} className="Search" style={{ marginLeft: '58%' }}>

            <TextField fullWidth variant="outlined" label="Programa göre ara"
            />
          </Grid>
          <button className="Ara" >
            ARA
        </button>
        </div>
      </div>
      <Router>
        <LeftMenu />
               
        <Switch>
          <Route path="/" component={Application} />   
          <Route path="/Salon1" component={Application} />
          <Route path="/Salon2" component={Application} />
          <Route path="/Salon3" component={Application} />
          <Route path="/Salon4" component={Application} />
        </Switch>

      </Router>
      <header className="App-header" style={{ backgroundColor:'#e5e5e5' }}>

      </header>

    </div>
  );
}

export default App;
