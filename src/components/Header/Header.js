import React from 'react'
import { Link } from 'react-router-dom'

import './Header.css';

const Header = () => {
  return (
    <header className='header'>
      <Link className='header__nav-start' to='/'>
        <h1><span>h</span>ulu</h1>
      </Link>

      <nav className='header__nav-mid'>
        <ul>
          <li>
            <Link to='/'>
              Home
            </Link>
          </li>

          <li>
            <Link to='/'>
              Tv
            </Link>
          </li>

          <li>
            <Link to='/'>
              Movies
            </Link>
          </li>

          <li>
            <Link to='/'>
              News
            </Link>
          </li>

          <li>
            <Link to='/'>
              My Stuff
            </Link>
          </li>

          <li>
            <Link to='/'>
              Hubs
            </Link>
          </li>
        </ul>
      </nav>

      <div className='header__nav-end'>
        <div className='header__nav-end--search'>
          <i className="fa fa-search" ariaHidden="true"></i>
        </div>

        <div className='header__nav-end--image-container'>
          <img src='https://www.k9ofmine.com/wp-content/uploads/2021/03/white-colored-maltese-850x520.jpg' alt='profile' />
        </div>
      </div>

    </header >
  )
}

export default Header