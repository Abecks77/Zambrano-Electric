import React, { useRef, useEffect } from 'react';

interface Point {
  x: number;
  y: number;
}

export const LightningCanvas: React.FC<{ className?: string }> = ({ className }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const generateLightning = (startX: number, startY: number, endX: number, endY: number, splits: number): Point[] => {
      const points: Point[] = [{ x: startX, y: startY }];
      let currentX = startX;
      let currentY = startY;
      
      const steps = 15;
      const xStep = (endX - startX) / steps;
      const yStep = (endY - startY) / steps;

      for (let i = 1; i <= steps; i++) {
        const randomness = (Math.random() - 0.5) * 80;
        currentX += xStep + randomness;
        currentY += yStep;
        points.push({ x: currentX, y: currentY });
      }
      
      points.push({ x: endX, y: endY });
      return points;
    };

    const drawLightning = (points: Point[], color: string, glow: number) => {
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);
      for (let i = 1; i < points.length; i++) {
        ctx.lineTo(points[i].x, points[i].y);
      }
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      ctx.shadowBlur = glow;
      ctx.shadowColor = color;
      ctx.stroke();
    };

    let frame = 0;
    let lastLightning = 0;

    interface Bolt {
      points: Point[];
      branchPoints?: Point[];
      life: number;
      maxLife: number;
    }
    const bolts: Bolt[] = [];
    
    interface Spark {
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      maxLife: number;
    }
    const sparks: Spark[] = [];

    const handleScroll = () => {
      // Accelerate lightning appearance based on scrolling
      lastLightning -= 15;
      
      // Add sparks when scrolling
      for (let i = 0; i < 4; i++) {
        sparks.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 10,
          vy: (Math.random() - 0.5) * 10 + 2, // slightly drift downwards
          life: 0,
          maxLife: Math.random() * 20 + 15
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw sparks
      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i];
        s.x += s.vx;
        s.y += s.vy;
        s.life++;
        
        ctx.beginPath();
        ctx.arc(s.x, s.y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 60, 60, ${1 - s.life / s.maxLife})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = '#FF0000';
        ctx.fill();
        ctx.shadowBlur = 0;
        
        if (s.life >= s.maxLife) {
          sparks.splice(i, 1);
        }
      }

      // Random lightning strikes, slower base rate, speeds up on scroll
      if (frame - lastLightning > Math.random() * 300 + 150) {
        lastLightning = frame;
        const startX = Math.random() * width;
        const points = generateLightning(startX, 0, startX + (Math.random() - 0.5) * 400, height, 0);
        
        let branchPoints;
        if (Math.random() > 0.5) {
            const branchIndex = Math.floor(points.length / 2);
            branchPoints = generateLightning(points[branchIndex].x, points[branchIndex].y, points[branchIndex].x + (Math.random() - 0.5) * 300, height, 0);
        }

        bolts.push({
          points,
          branchPoints,
          life: 0,
          maxLife: Math.random() * 15 + 10 // flash lasts 10-25 frames
        });
      }

      // Draw bolts
      for (let i = bolts.length - 1; i >= 0; i--) {
        const b = bolts[i];
        b.life++;
        
        const opacity = 1 - (b.life / b.maxLife);
        
        // Draw main bolt
        drawLightning(b.points, `rgba(255, 0, 0, ${opacity})`, 15);
        ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.8})`;
        ctx.lineWidth = 1;
        ctx.shadowBlur = 0;
        ctx.stroke();
        
        if (b.branchPoints) {
           drawLightning(b.branchPoints, `rgba(255, 0, 0, ${opacity * 0.8})`, 10);
        }

        if (b.life >= b.maxLife) {
          bolts.splice(i, 1);
        }
      }

      frame++;
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className={`fixed inset-0 pointer-events-none z-0 object-cover ${className || ''}`}
    />
  );
};
