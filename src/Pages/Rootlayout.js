import React from 'react';
import Logo from './Logo';
import { Outlet } from 'react-router-dom';

export default function Rootlayout() {
  return (
    <div>
      <Logo />
      <main>
        <Outlet />
      </main>
    </div>
  );
};


