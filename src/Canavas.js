import React, { useRef, useEffect } from "react";
import { generateColor } from "./Common";

const Canavas = ({ uniqueNumbers }) => {
  const canvas = useRef(null);
  const ctx = useRef(null);

  // draw pixel with background
  const drawFillRect = (info) => {
    const { x, y, w, h, backgroundColor } = info;

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

  useEffect(() => {
    (async function () {
      try {
        const colors = await generateColor(uniqueNumbers);
        colors.forEach((color) => {
          drawFillRect(color);
        });
      } catch (e) {
        console.error(e);
      }
    })();
  }, [uniqueNumbers]);

  return (
    <div>
      <canvas ref={canvas}></canvas>
    </div>
  );
};

export default Canavas;
