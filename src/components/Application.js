import React from 'react'
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import logo from '../logo/taskIcon.jpg';


const list=[1,2,3,4,5,6,7,8]
function Application() {
    return (
        <div className="Card-group" >
            {
            list.map(() => {
                return (

            <Container className="Card" style={{ width: '20%', marginLeft: '5%' }}>

                <img src={logo} style={{ width: '200px', marginTop: "5%" }} alt="Logo" />
                <hr color="#e5e5e5" />

                <Typography component="h1" style={{ fontWeight: '700', color: "black" }} variant="h4" gutterBottom>
                    ACE
                </Typography>

                <Typography style={{ fontWeight: '400', color: "grey" }}  >
                    "Bizimle Ingilizce ögrenin!"
                </Typography>

                <button className="btn-card" >
                    FİRMANIN STANDINI GÖR
                </button>
            </Container>
        );
    })}
        </div>
    );

}
export default Application;
