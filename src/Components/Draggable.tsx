import React, { useState, useEffect, useRef } from 'react';
import bateau from '../assets/bateau.png';
import drapeau from '../assets/drapeau.png';
import './navigation.css';
import { useNavigate } from 'react-router-dom';

const Draggable = () => {
  const [position, setPosition] = useState(() => ({
    x: window.innerWidth / 2 - 125, // Largeur du bateau (150px) divisée par 2
    y: window.innerHeight / 2 - 175, // Hauteur du bateau (150px) divisée par 2
  }));
  const [dragging, setDragging] = useState(false);
  const [rel, setRel] = useState({ x: 0, y: 0 });
  const draggableRef = useRef<HTMLDivElement | null>(null);
  const buttonRefs = useRef<HTMLButtonElement[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const handleMouseUp = () => setDragging(false);
    window.addEventListener('mouseup', handleMouseUp);
    return () => window.removeEventListener('mouseup', handleMouseUp);
  }, []);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setDragging(true);
    setRel({
      x: e.pageX - position.x,
      y: e.pageY - position.y,
    });
    e.preventDefault();
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!dragging) return;
    updatePosition(e.pageX, e.pageY);
    checkCollision();
    e.preventDefault();
  };

  const updatePosition = (pageX: number, pageY: number) => {
    setPosition({
      x: Math.max(0, Math.min(pageX - rel.x, window.innerWidth - 100)),
      y: Math.max(0, Math.min(pageY - rel.y, window.innerHeight - 100)),
    });
  };

  const checkCollision = () => {
    const draggable = draggableRef.current;

    if (draggable) {
      const draggableRect = draggable.getBoundingClientRect();

      buttonRefs.current.forEach((button, index) => {
        if (button) {
          const buttonRect = button.getBoundingClientRect();

          const isColliding = !(
            buttonRect.right < draggableRect.left ||
            buttonRect.left > draggableRect.right ||
            buttonRect.bottom < draggableRect.top ||
            buttonRect.top > draggableRect.bottom
          );

          if (isColliding) {
            // Si la souris est sur le bouton ET il y a collision
            if (button.classList.contains('hovered')) {
              console.log(`Valid collision detected with button ${index + 1}`);
              button.classList.add('active');
              switch (index) {
                case 0:
                  navigate('/Algues');
                  break;
                case 1:
                  navigate('/Coeur');
                  break;
                case 2:
                  navigate('/Coraux');
                  break;
                case 3:
                  navigate('/gulf_stream');
                  break;
                case 4:
                  navigate('/Plancton');
                  break;              
                default:
                  console.log('Index out of range');
                  break;
              }
              
            }
          } else {
            button.classList.remove('active');
          }
        }
      });
    }
  };

  const handleMouseEnter = (index: number) => {
    const button = buttonRefs.current[index];
    if (button) {
      button.classList.add('hovered');
      checkCollision(); // Vérifiez immédiatement la collision lorsque la souris entre
    }
  };

  const handleMouseLeave = (index: number) => {
    const button = buttonRefs.current[index];
    if (button) {
      button.classList.remove('hovered');
      button.classList.remove('active'); // Retirez l'activation quand la souris quitte le bouton
    }
  };

  const buttons = [
    { top: '50px', left: '100px' },
    { top: '200px', left: '300px' },
    { top: '400px', left: '600px' },
    { top: '100px', left: '50px' },
    { top: '300px', left: '200px' },
    { top: '210px', left: '680px' },
  ];

  return (
    <>
      <div
        ref={draggableRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        style={{
          position: 'absolute',
          left: `${position.x}px`,
          top: `${position.y}px`,
          cursor: 'grab',
        }}
      >
        <img
          src={bateau}
          alt="bateau"
          style={{
            width: '150px',
          }}
        />
      </div>

      {buttons.map((button, index) => (
        <button
          key={index}
          ref={(el) => (buttonRefs.current[index] = el!)}
          className="custom-button"
          style={{
            position: 'absolute',
            top: button.top,
            left: button.left,
            outline: 0,
          }}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={() => handleMouseLeave(index)}
        >
          <img src={drapeau} alt={`Bouton ${index + 1}`} />
        </button>
      ))}
    </>
  );
};

export default Draggable;
