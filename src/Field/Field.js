import './Field.css';
import React, {useEffect, useState} from "react";
import {controls} from "../controls";
import {Square} from "../Square/Square";
import {emptyArray} from "../helper";

export function Field(props) {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() =>
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
    , [])

  const squareItems = emptyArray(props.rows).map((_, rowIndex) =>
    emptyArray(props.cols).map((_, colIndex) =>
      <Square active={x === colIndex && y === rowIndex}
              rows={props.rows}
              cols={props.cols}
              key={rowIndex * props.rows + colIndex}
      />
    )
  )

  return (
    <div className="Field">
      {squareItems}
    </div>
  );
}
