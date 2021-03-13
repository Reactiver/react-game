import React from 'react';
import './Square.css';

export function Square({active, cols, rows}) {
  const style = {
    width: `calc(100% / ${cols})`,
    height: `calc(100% / ${rows})`,
  }

  return <div
    className={`square ${active ? 'square--active' : ''}`}
    style={style}/>
}
