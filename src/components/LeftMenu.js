import React from 'react';
import './LeftMenu.css'
import { Link as RouterLink } from "react-router-dom";

import Typography from "@material-ui/core/Typography";

function LeftMenu() {
    /*Butona basıldığında rengin ve ortadaki salon bilgisinin değişmesi için olan kısım*/ 
    const [state, setState] = React.useState('button01');
    const [prevState, setPrevState] = React.useState('button02');
    function changeColor(id,infoText) {
        setState(id)
        setPrevState(state)
        document.getElementById("infoText").innerHTML=infoText;
    }
    React.useEffect(() => {

        if (prevState !== '' && state !== '') {
            document.getElementById(prevState).style.color = '#1264c9';
            document.getElementById(prevState).style.backgroundColor = 'white';
            document.getElementById(state).style.color = 'white';
            document.getElementById(state).style.backgroundColor = '#1264c9';
            console.log(prevState);
            console.log(state);
        }

    }, [state]);

    return (
        <div className='MenuInfo'>
            <div className="Info" >
                <div > <h1 class='infoText' id='infoText'>Salon 01</h1></div>
                <hr class='infoTop' />
                <hr class='infoBottom' />
            </div>

            <div className='Menu'>
                <div className='kenar'> </div>
                <div class="group-button">
                    <RouterLink to="/Salon1">
                        <button id='button01' class="button button01"
                            onClick={() => {
                                changeColor('button01','Salon 01');
                            }
                            }
                        > 01
                    <span class="tooltiptext">Salon</span></button>
                    </RouterLink>
                    <RouterLink to="/Salon2">
                        <button id='button02' class="button button02"
                            onClick={() => changeColor('button02','Salon 02')
                            }> 02
                    <span class="tooltiptext2">Salon</span>
                        </button>
                    </RouterLink>
                    <RouterLink to="/Salon3">
                        <button id='button03' class="button button03"
                            onClick={() => changeColor('button03','Salon 03')
                            }> 03
                    <span class="tooltiptext3">Salon</span>
                        </button>
                    </RouterLink>
                    <RouterLink to="/Salon4">
                        <button id='button04' class="button button04"
                            onClick={() => changeColor('button04','Salon 04')
                            }> 04
                    <span class="tooltiptext4">Salon</span>
                        </button>
                    </RouterLink>


                </div>

            </div>

        </div>


    )
}

export default LeftMenu;