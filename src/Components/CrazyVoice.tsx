import React, { useState, useEffect, useRef } from 'react';
import Cookies from 'js-cookie';

type VolumeControlProps = {
  imageSrc: string; // URL de l'image de volume
  maxVolume?: number; // Volume maximal, par défaut 100
  minVolume?: number; // Volume minimal, par défaut 0
  volumeImages?: string[]; // Liste des images en fonction du volume
};

const VolumeControl: React.FC<VolumeControlProps> = ({
  imageSrc,
  maxVolume = 100,
  minVolume = 0,
  volumeImages = [], // Passer un tableau d'images pour chaque tranche de volume
}) => {
  const [volume, setVolume] = useState<number>(() => {
    const savedVolume = Cookies.get('volume');
    return savedVolume
      ? Math.min(maxVolume, Math.max(minVolume, parseInt(savedVolume, 10)))
      : 50;
  });

  const [rotation, setRotation] = useState<number>((volume / maxVolume) * 360);
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

      const normalizedAngle = (angle + 360) % 360; // Convertir en angle positif
      setRotation(normalizedAngle);

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

  // Calculer l'image à afficher en fonction du volume
  const getVolumeImage = () => {
    const index = Math.floor(volume / 10); // Divise le volume par 10 pour créer des tranches de 0-9, 10-19, etc.
    return volumeImages[index] || imageSrc; // Utilise l'image par défaut si aucune image n'est trouvée pour cette tranche
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
        <img
          src={imageSrc} // L'image qui tourne
          alt="Volume Control"
          style={{ width: '200px', height: '200px', display: 'block' }}
        />
      </div>

      {/* Image qui change à côté */}
      <div style={{ display: 'inline-block', marginLeft: '20px' }}>
        <img
          src={getVolumeImage()} // L'image qui change selon le volume
          alt="Volume Image"
          style={{ width: '100px', height: '100px', display: 'block' }}
        />
      </div>

      <div style={{ marginTop: '20px', fontSize: '1.2em' }}>Volume: {Math.round(volume)}%</div>
    </div>
  );
};

export default VolumeControl;
