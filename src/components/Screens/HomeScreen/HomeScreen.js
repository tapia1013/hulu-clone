import React from 'react'
import './HomeScreen.css';


const HomeScreen = () => {
  return (
    <div className='home-screen'>
      <div className='home-screen__bg'></div>
      <div className='home-screen__info'>
        <div className='left'>
          <h1>Courage the cowardly dog</h1>

          <h3>Season 1 - Return the slap</h3>

          <p>In Seattle, all firefighters are also trained<br /> EMTs and the crew at Station 19 is second to none.</p>

          <div className='home-screen__info--buttons'>
            <div className='home-screen__info--btn btn-play'>
              <i className="fas fa-play" /> Play
            </div>

            <div className='home-screen__info--btn btn-more-info'>
              Details
            </div>
          </div>
        </div>

        <div className='right'></div>
      </div>
    </div>
  )
}

export default HomeScreen