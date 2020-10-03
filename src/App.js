import React from 'react';
import Application from './components/Application';
import DataViewLazy from './components/DataViewLazy';
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import TextField from '@material-ui/core/TextField';
import Grid from "@material-ui/core/Grid";


import './App.css'



function App() {

  return (
    
    <div className="App"  >
      <DataViewLazy />
      <div className="Filter" >
        <div className="GreyDiv" >
          <Grid item xs={12} sm={6} className="Search">

            <TextField fullWidth variant="outlined" label="Kelime veya Kurum Adı ile ara "
            />
          </Grid>
          <Grid item xs={12} sm={6} className="Search" style={{ marginLeft: '29%'}}>

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
      <header className="App-header">


        <Application />
        </header>
        
        


      
    </div>
  );
}

export default App;
