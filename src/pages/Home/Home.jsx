import React from 'react'
import videoBg from '../../images/videoacademian.mp4'
import "./Home.css";
import Header from "../../components/Header/Header";


export const Home = () => {
  return (
    <>
      <Header/>
      <div className='main'>
          <div className="overlay"></div>
          <video src={videoBg} autoPlay loop muted />
          <div className="content">
          <img className='logovideo' src="../src/images/academian2024.svg"></img>
          </div>
      </div>
    </>
  )
}