import React from 'react';
import logocss from '../css/Logo.module.css';
import mylogo from './mylogo.gif';

export default function Logo() {
  return (
    <div className={logocss.app}>
      <header className={logocss.header}>
        <img src={mylogo} alt="Logo" className={logocss.logo} />
      </header>
      <main className={logocss.maincontent}>
        <h1>React JS Final Assignment.</h1>
      </main>
    </div>
  );
}
