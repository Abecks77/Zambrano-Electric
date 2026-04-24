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
    
    const animate = () => {
      ctx.fillStyle = 'rgba(10, 10, 10, 0.15)'; // Fade out effect
      ctx.fillRect(0, 0, width, height);

      // Random lightning strikes
      if (frame - lastLightning > Math.random() * 200 + 100) {
        lastLightning = frame;
        const startX = Math.random() * width;
        const points = generateLightning(startX, 0, startX + (Math.random() - 0.5) * 400, height, 0);
        
        // Draw main bolt
        drawLightning(points, '#FF0000', 15);
        ctx.strokeStyle = '#FFF';
        ctx.lineWidth = 1;
        ctx.shadowBlur = 0;
        ctx.stroke();
        
        // Sometimes draw a branching bolt
        if (Math.random() > 0.5) {
            const branchIndex = Math.floor(points.length / 2);
            const branchPoints = generateLightning(points[branchIndex].x, points[branchIndex].y, points[branchIndex].x + (Math.random() - 0.5) * 300, height, 0);
            drawLightning(branchPoints, '#FF0000', 10);
        }

        // Sky flash
        ctx.fillStyle = 'rgba(255, 0, 0, 0.05)';
        ctx.fillRect(0,0, width, height);
      }

      frame++;
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className={`fixed inset-0 pointer-events-none z-0 object-cover ${className || ''}`}
    />
  );
};
