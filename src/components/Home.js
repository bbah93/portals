import React from 'react'
import acab from '../assets/png/ACAB.png';
import alienSpeak from '../assets/png/AlienSpeak.png';
import aGB from '../assets/png/AllGoesBad.png';
import dITD from '../assets/png/DiamondInTheDark.png';
import fITL from '../assets/png/FunnyInTheLight.png';
import kablam from '../assets/png/Kablam.png';
import leaveEarth from '../assets/png/LeaveEarth.png';
import numb from '../assets/png/Numb.png';
import seeingSigns from '../assets/png/SeeingSigns.png';
import spaceship from '../assets/png/Spaceship.png';
import styled from 'styled-components'


import { useHistory } from "react-router-dom";







const Home = () => {

    const history = useHistory();

    return (
        <div className="home-container">
            
            <img src="//freight.cargo.site/w/300/i/05938c6fc0ab28e777e3e1ddd2696ba52157267f3c451b3f530af18114c3ea50/Jigsaw-Logo-1.png" class="rotate" width="100" height="100" />

            <div id="image-gallery" style={galleryStyle}>
                
                <div className="image-card" style={imageCardStyle}>
                    <h4 className="image-header">Kablam!</h4>
                    <img className="songImage" src={kablam} height="250px"/>
                    <button className="enterportal-button" onClick={() => history.push('/kablam')}>Color The Portal </button>
                </div>
                <div className="image-card" style={imageCardStyle}>
                    <h4 className="image-header">Alien Speak!</h4>
                    <img className="songImage" src={alienSpeak} height="250px"/>
                    <button className="enterportal-button" onClick={() => history.push('/alien-speak')}>Color The Portal </button>
                </div>
                <div className="image-card" style={imageCardStyle}>
                    <h4 className="image-header">Funny In The Light</h4>
                    <img className="songImage" src={fITL} height="250px"/>
                    <button className="enterportal-button"  onClick={() => history.push('/funny-in-the-light')}>Color The Portal </button>
                </div>
                <div className="image-card" style={imageCardStyle}>
                    <h4 className="image-header">Acab</h4>
                    <img className="songImage" src={acab} height="250px"/>
                    <button className="enterportal-button"  onClick={() => history.push('/acab')}>Color The Portal </button>
                </div>

                <div className="image-card" style={imageCardStyle}>
                    <h4 className="image-header">Seeing Signs</h4>
                    <img className="songImage" src={seeingSigns} height="250px"/>
                    <button className="enterportal-button"  onClick={() => history.push('/seeing-signs')}>Color The Portal </button>
                </div>
                <div className="image-card" style={imageCardStyle}>
                    <h4 className="image-header">Leave Earth</h4>
                    <img className="songImage" src={leaveEarth} height="250px"/>
                    <button className="enterportal-button"  onClick={() => history.push('/leave-earth')}>Color The Portal </button>
                </div>
                <div className="image-card" style={imageCardStyle}>
                    <h4 className="image-header">All Goes Bad</h4>
                    <img className="songImage" src={aGB} height="250px"/>
                    <button className="enterportal-button"  onClick={() => history.push('/all-goes-bad')}>Color The Portal </button>
                </div>
                <div className="image-card" style={imageCardStyle}>
                    <h4 className="image-header">Spaceship</h4>
                    <img className="songImage" src={spaceship} height="250px"/>
                    <button className="enterportal-button"  onClick={() => history.push('/spaceships')}>Color The Portal </button>
                </div>

                <div className="image-card" style={imageCardStyle}>
                    <h4 className="image-header">Diamond In The Dark</h4>
                    <img className="songImage" src={dITD} height="250px"/>
                    <button className="enterportal-button"  onClick={() => history.push('/diamond-dark')}>Color The Portal </button>
                </div>
                <div className="image-card" style={imageCardStyle}>
                    <h4 className="image-header">Numb</h4>
                    <img className="songImage" src={numb} height="250px"/>
                    <button className="enterportal-button"  onClick={() => history.push('/numb')}>Color The Portal </button>
                </div>
            </div>
            <img src="https://i.imgur.com/kDDFvUp.png" class="rotate" width="100" height="100" />

        </div>
    )
}


const Title = styled.h1`
  text-align: center;
  color: #60ad5e;
  padding: 16px;
  font-family: monospace;
  margin-top: 0px;
  font-style: italic;
  font-size: 10vmin;
  background-color: #534bae;
`;

const HomeContainer = styled.div`
    background-image: url("https://hastingsmuseum.org/wp-content/uploads/2019/07/starry-night-bkgd-1.jpg");


`;


const galleryStyle = {
    display: "flex",
    flexWrap: 'wrap',
    justifyContent: 'center'
}

const imageCardStyle ={
    
    display: "flex",
    textAlign: 'center',
    fontFamily: 'Courier New',
    alignItems: 'center',
    backgroundColor: '#fff',
    border: "2px solid #cfcfcf",
    borderRadius: "5px",
    padding: "1rem",
    width: "17rem",
    height: "24rem",
    margin: "2rem",
    flexDirection: "column",
    justifyContent: "space-around"
}

export default Home 