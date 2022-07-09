import React from 'react';
import style from './layout.module.less'
import MainPage from '../pages/MainPage';
import Navbar from '../components/navigation/Navbar';

function Layout() {
  return (
    <div className={style.container}>
      <Navbar className={style.navbar}/>
      <MainPage />
    </div>
  )
}

export default Layout;