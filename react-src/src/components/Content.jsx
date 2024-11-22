import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../page/Home';
import GalleryCube from '../page/GalleryCube';

const Content = () => {
  return (
    <main className='component-2-content'>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/index.html' element={<Home />}></Route>
        <Route
          path='/artisans'
          element={<GalleryCube prefixImg='n' folder='artisans' />}
        ></Route>
        <Route
          path='/keycaps'
          element={<GalleryCube prefixImg='m' folder='keycaps' />}
        ></Route>
        <Route
          path='/switches'
          element={<GalleryCube prefixImg='b' folder='switches' mousepads />}
        ></Route>
        <Route
          path='/mousepads'
          element={<GalleryCube prefixImg='v' folder='mousepads' />}
        ></Route>
        <Route
          path='/cables'
          element={<GalleryCube prefixImg='c' folder='cables' />}
        ></Route>
        <Route
          path='/accessories'
          element={<GalleryCube prefixImg='a' folder='accessories' />}
        ></Route>
      </Routes>
    </main>
  );
};

export default Content;
