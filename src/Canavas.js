import React, { useRef, useEffect } from "react";

const Canavas = ({ uniqueNumbers }) => {
  const canvas = useRef(null);
  const ctx = useRef(null);

  // draw pixel with background
  const drawFillRect = (info, style) => {
    const { x, y, w, h } = info;
    const { backgroundColor } = style;

    ctx.current.beginPath();
    ctx.current.fillStyle = backgroundColor;
    ctx.current.fillRect(x, y, w, h);
  };

  // initialize the canvas
  useEffect(() => {
    const canvasEle = canvas.current;
    canvasEle.width = "256";
    canvasEle.height = "128";

    // get context of the canvas and set it i the ctx ref
    const context = canvasEle.getContext("2d");
    ctx.current = context;
  }, []);

  // generate colors
  const generateColor = (data) => {
    let count = 0;
    let xAxis = 0;
    let yAxis = 0;
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data.length; j++) {
        for (let k = 0; k < data.length; k++) {
          count++;
          drawFillRect(
            { x: xAxis * 1, y: yAxis, w: 1, h: 1 },
            {
              backgroundColor: `rgb(${data[k]},${data[j]},${data[i]})`,
            }
          );
          xAxis++;

          // logic to wrap the pixels to next line
          if (count % 256 === 0) {
            yAxis = yAxis + 1;
            xAxis = 0;
          }
        }
      }
    }
  };

  useEffect(() => {
    generateColor(uniqueNumbers);
  }, [uniqueNumbers]);

  return (
    <div>
      <canvas ref={canvas}></canvas>
    </div>
  );
};

export default Canavas;
