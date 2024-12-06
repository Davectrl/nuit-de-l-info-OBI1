import React, { useState, useEffect, useRef } from 'react';
import Cookies from 'js-cookie';

type VolumeControlProps = {
  imageSrc: string; // URL de l'image
  maxVolume?: number; // Volume maximal, par défaut 100
  minVolume?: number; // Volume minimal, par défaut 0
};

const VolumeControl: React.FC<VolumeControlProps> = ({ imageSrc, maxVolume = 100, minVolume = 0 }) => {
  const [volume, setVolume] = useState<number>(() => {
    const savedVolume = Cookies.get('volume');
    return savedVolume ? Math.min(maxVolume, Math.max(minVolume, parseInt(savedVolume, 10))) : 50;
  }); // Initialisation avec les cookies ou une valeur par défaut

  const [rotation, setRotation] = useState<number>((volume / maxVolume) * 360); // Rotation initiale basée sur le volume
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Sauvegarder le volume dans les cookies à chaque changement
  useEffect(() => {
    Cookies.set('volume', volume.toString());
  }, [volume]);

  const handleMouseMove = (e: MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;
      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

      const normalizedAngle = (angle + 360) % 360; // Convertit en angle positif
      setRotation(normalizedAngle);

      // Calcule le volume en fonction de l'angle (de 0 à 360)
      const newVolume = Math.min(maxVolume, Math.max(minVolume, Math.round((normalizedAngle / 360) * maxVolume)));
      setVolume(newVolume);
    }
  };

  const handleMouseDown = () => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseUp = () => {
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('mouseup', handleMouseUp);
  };

  return (
    <div style={{ textAlign: 'center', userSelect: 'none' }}>
      <div
        ref={containerRef}
        onMouseDown={handleMouseDown}
        style={{
          display: 'inline-block',
          transform: `rotate(${rotation}deg)`,
          cursor: 'grab',
        }}
      >
        <img src={imageSrc} alt="Volume Control" style={{ width: '200px', height: '200px', display: 'block' }} />
      </div>
      <div style={{ marginTop: '20px', fontSize: '1.2em' }}>Volume: {Math.round(volume)}%</div>
    </div>
  );
};

export default VolumeControl;