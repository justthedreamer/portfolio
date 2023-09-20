import React, { useEffect, useRef, useState } from "react";

const CanvasSky = () => {
  // Canvas HTML element reference
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  
  const animationFrameRef = useRef<number | null>(null);

  // Initialize stars by empty array.
  const stars:Star[] = [];
  // Initialize meteors by empy array
  const meteors:Star[] = [];

  interface Star {
    x : number,
    y: number,
    speed : number;
  }

  // Create stars array with random X (horizontal) , Y (vertical) , Speed values.
  const initStars = (starsCount : number) => {
    for (let i = 0; i < starsCount; i++) {
      stars.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        speed: Math.random() + 1, 
      });
    }
  };

  // Create meteors with random X (horizontal position), Y (vertical) , Speed (min 1 max 10) values.
  const initMeteors = (numMeteors: number) => {
    for(let i = 0 ; i < numMeteors; i++){
        let random: number = Math.random();
        meteors.push({
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            speed: random === 0 ?  10 :  random * 10,
        });
    }
  }

  const animateStars = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    context.clearRect(0, 0, canvas.width, canvas.height);


    const gradient = context.createLinearGradient(0 ,0 , 0, canvas.height);

    gradient.addColorStop(0, "rgba(0,0,25)"); 
    gradient.addColorStop(1, "black"); 

    context.fillStyle = gradient;
    context.fillRect(0, 0, canvas.width, canvas.height);




    for (const star of stars) {
      star.x -= 0.5 * star.speed;

      if (star.x < 0) {
        star.x = window.innerWidth;
        star.y = Math.random() * window.innerHeight;
      }

      context.beginPath();
      context.arc(star.x, star.y, .5, 0, Math.PI * 2);
      context.fillStyle = "white";
      context.fill();
    }

    for (const meteor of meteors) {
        meteor.x -= meteor.speed;
        meteor.y += meteor.speed * .3;
  
        if (meteor.x < -1000) {
          meteor.x = window.innerWidth;
          meteor.y = Math.random() * window.innerHeight;
        }
  
        context.beginPath();
        context.arc(meteor.x, meteor.y, 1, 0, Math.PI * 2);
        context.fillStyle = "white"; 
        context.fill();
      }

    animationFrameRef.current = requestAnimationFrame(animateStars);
  };


  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const windowScaleRatio = window.devicePixelRatio
    
    canvas.width = window.innerWidth* windowScaleRatio;
    canvas.height = window.innerHeight * windowScaleRatio;

    const context = canvas.getContext("2d");
    if (!context) return;

    context.scale(windowScaleRatio, windowScaleRatio);

    initStars(300);
    initMeteors(15);
    animateStars();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  
  return (
      <canvas
        id="background-sky"
        ref={canvasRef}
      />
  );
};

export default CanvasSky;
