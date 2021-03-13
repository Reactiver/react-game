import './Field.css';
import React, {useEffect, useState} from "react";
import {controls} from "./controls";

function Square({active, cols, rows}) {
  const squareStyle = {
    width: `calc(100% / ${cols})`,
    height: `calc(100% / ${rows})`,
  }

  return <div
    className={`square ${active ? 'square--active' : ''}`}
    style={squareStyle}/>
}

function Field(props) {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const listItems = new Array(props.rows).fill(0).map((_, rowIndex) =>
    new Array(props.cols).fill(0).map((_, colIndex) => <Square active={x === colIndex && y === rowIndex}
                                                               cols={props.cols} rows={props.rows}/>))

  useEffect(() => {
    window.addEventListener('keydown', event => {
      if (controls.up.includes(event.key)) {
        setY(y => y - 1)
      }
      if (controls.right.includes(event.key)) {
        setX(x => x + 1)
      }
      if (controls.down.includes(event.key)) {
        setY(y => y + 1)
      }
      if (controls.left.includes(event.key)) {
        setX(x => x - 1)
      }
    })
  }, [])

  return (
    <div className="Field">
      {listItems}
    </div>
  );
}

export default Field;
