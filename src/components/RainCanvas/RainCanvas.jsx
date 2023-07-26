import React, { useEffect, useRef } from 'react';

function RainCanvas() {
  const canvasRef = useRef(null);
  const cRef = useRef(null);
  const rainArrayRef = useRef([]);

  const randomNum = (max, min) => {
    return Math.floor(Math.random() * max) + min;
  };

  function RainDrops(x, y, endy, velocity, opacity) {
    this.x = x;
    this.y = y;
    this.endy = endy;
    this.velocity = velocity;
    this.opacity = opacity;

    this.draw = function () {
      cRef.current.beginPath();
      cRef.current.moveTo(this.x, this.y);
      cRef.current.lineTo(this.x, this.y - this.endy);
      cRef.current.lineWidth = 1;
      cRef.current.strokeStyle = `rgba(255, 255, 255, ${this.opacity})`;
      cRef.current.stroke();
    };

    this.update = function () {
      let rainEnd = window.innerHeight + 100;
      if (this.y >= rainEnd) {
        this.y = this.endy - 100;
      } else {
        this.y = this.y + this.velocity;
      }
      this.draw();
    };
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const c = canvas.getContext('2d');
    cRef.current = c;

    const animateRain = () => {
      requestAnimationFrame(animateRain);
      c.clearRect(0, 0, window.innerWidth, window.innerHeight);

      for (let i = 0; i < rainArrayRef.current.length; i++) {
        rainArrayRef.current[i].update();
      }
    };

    for (let i = 0; i < 140; i++) {
      let rainXLocation = Math.floor(Math.random() * window.innerWidth) + 1;
      let rainYLocation = Math.random() * -500;
      let randomRainHeight = randomNum(10, 2);
      let randomSpeed = randomNum(20, 0.2);
      let randomOpacity = Math.random() * 0.55;
      rainArrayRef.current.push(
        new RainDrops(
          rainXLocation,
          rainYLocation,
          randomRainHeight,
          randomSpeed,
          randomOpacity
        )
      );
    }

    animateRain();

    const handleResize = () => {
      rainArrayRef.current = [];
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      for (let i = 0; i < 140; i++) {
        let rainXLocation = Math.floor(Math.random() * window.innerWidth) + 1;
        let rainYLocation = Math.random() * -500;
        let randomRainHeight = randomNum(10, 2);
        let randomSpeed = randomNum(20, 0.2);
        let randomOpacity = Math.random() * 0.55;
        rainArrayRef.current.push(
          new RainDrops(
            rainXLocation,
            rainYLocation,
            randomRainHeight,
            randomSpeed,
            randomOpacity
          )
        );
      }

      animateRain();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="rain" />;
}

export default RainCanvas;
