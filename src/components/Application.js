import React from 'react'
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import logo from '../logo/taskIcon.jpg';



function Application() {
    return (
        <div className="Card">
            <Container style={{ marginTop: "5%", backgroundColor: "#ffffff", height: '30vh', width: '32vh', borderRadius: '10px' }}>

                <img src={logo} style={{ width: '200px', marginTop: "5%" }} alt="Logo" />
                <hr color="#e5e5e5" />

                <Typography component="h1" style={{ fontFamily: 'system-ui', fontWeight: '700', color: "black" }} variant="h4" gutterBottom>
                    ACE
                    </Typography>

                <Typography style={{ fontFamily: 'system-ui', fontWeight: '400', color: "grey" }}  >
                    "Bizimle Ingilizce ögrenin!"
                    </Typography>

                <Button variant="contained" color="primary" size="large" style={{ marginTop: "10%" }}>
                    FİRMANIN STANDINI GOR
                </Button>

            </Container>
        </div>
    );
}

export default Application;
