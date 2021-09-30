import React from 'react';
import { Link } from 'react-router-dom';

import videoPlayer from '../../assets/static/Video-Player.png';
import userIcon from '../../assets/static/user_icon.png';
import './index.styl';

const Header = () => {
  return (
    <header>
      <Link to='/'>
        <img className='header__img' src={videoPlayer} alt='Logo Video Player' />
      </Link>
      <div className='header__menu'>
        <div className='header__menu--profile'>
          <img src={userIcon} alt='User Icono'  />
          <p>Perfil</p>
        </div>
        <ul>
          <li>
            <p>Iniciar sesión</p>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
