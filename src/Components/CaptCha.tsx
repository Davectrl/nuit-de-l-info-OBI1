import React, { useState, useEffect, useRef } from "react";
import "./CaptChat.css"; // Ajouter le style ici
import o2 from "../assets/O2.png";
import co2 from "../assets/CO2.png";
import o from "../assets/Oxygene.png";
import c from "../assets/Carbone.png";
import { useNavigate } from "react-router-dom";

interface Bubble {
  id: number;
  type: "A" | "B";
  positionX: number;
}

const BubbleGame: React.FC = () => {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const [pairsOfA, setPairsOfA] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const [trios, setTrios] = useState(0);
  const [selectedBubbles, setSelectedBubbles] = useState<Bubble[]>([]);
  const bubbleId = useRef(0);
  const gameInterval = useRef<NodeJS.Timeout | null>(null);
  const navigate = useNavigate();
  console.log(selectedBubbles);
  useEffect(() => {
    // Lancer la génération automatique des bulles
    gameInterval.current = setInterval(() => {
      generateBubble();
    }, 1500);

    return () => {
      if (gameInterval.current) clearInterval(gameInterval.current);
    };
  }, []);

  const generateBubble = () => {
    const newBubble: Bubble = {
      id: bubbleId.current++,
      type: Math.random() < 0.7 ? "A" : "B", // 70% de chance pour A
      positionX: Math.random() * 90, // Position aléatoire (0 à 90%)
    };
    setBubbles((prevBubbles) => [...prevBubbles, newBubble]);
  };
  const [imagesSelectionnees, setimagesSelectionnees] = useState<string[]>([]);

  const handleBubbleClick = (id: number, type: "A" | "B") => {
    const clickedBubble = bubbles.find((bubble) => bubble.id === id);
    if (!clickedBubble) return;

    setSelectedBubbles((prevSelected) => {
      const newSelected = [...prevSelected, clickedBubble];
      if (type === "A") {
        setimagesSelectionnees([...imagesSelectionnees, o]);
      }
      if (type === "B") {
        setimagesSelectionnees([...imagesSelectionnees, c]);
      }
      // Compter les bulles de type A et de type B dans la sélection
      const countA = newSelected.filter((bubble) => bubble.type === "A").length;
      const countB = newSelected.filter((bubble) => bubble.type === "B").length;

      // Vérifier si deux bulles de type A sont sélectionnées (duo)
      if (countA === 2 && countB === 0) {
        if (pairsOfA < 4) {
          setPairsOfA((prev) => prev + 1);
          setimagesSelectionnees([]);
        }
        // Supprimer les deux bulles A sélectionnées
        setimagesSelectionnees([]);
        return newSelected.filter((bubble) => bubble.type !== "A").slice(0, 1); // Garde 1 bulle "A" restante
      }

      // Vérifier si deux bulles de type A et une bulle de type B sont sélectionnées (trio)
      if (countA === 2 && countB === 1) {
        if (trios < 2) {
          setTrios((prev) => prev + 1);
          setimagesSelectionnees([]);
        } else {
          setGameOver(true);
          const timer = setTimeout(() => {
            alert("Vos poumons sont forcément fait de métal pour survivre dans cette environnement. Vous ne pouvez pas accéder aux contenus")
            navigate("/")
          }, 3000)
          timer;
        }
        // Supprimer les deux bulles A et la bulle B sélectionnées
        setimagesSelectionnees([]);
        return newSelected
          .filter((bubble) => bubble.type !== "A" && bubble.type !== "B")
          .slice(0, 1); // Garde 1 bulle restante
      }

      // Réinitialiser si deux bulles de type B sont sélectionnées
      if (countB === 2) {
        setimagesSelectionnees([]);
        return []; // Réinitialise la sélection si 2 bulles B sont sélectionnées
      }

      return newSelected; // Retourne la sélection actuelle si aucune condition n'est remplie
    });

    setBubbles((prevBubbles) =>
      prevBubbles.filter((bubble) => bubble.id !== id)
    );
  };

  const resetGame = () => {
    setPairsOfA(0);
    setTrios(0);
    setBubbles([]);
    setSelectedBubbles([]);
  };

  useEffect(() => {
    // Vérifiez les conditions de victoire
    if (pairsOfA >= 4 && trios >= 2) {
      alert("Félicitations ! Vous avez gagné !");
      navigate("/");
      resetGame();
    }
  }, [pairsOfA, trios]);

  const imagesToShow = [];

  for (let i = 0; i < pairsOfA; i++) {
    // Ajouter l'image (en fonction de l'index, vous pouvez ajuster l'image ici)
    imagesToShow.push(o2); // Si `pairs` est plus grand que `imageUrls`, cela boucle les images
  }
  for (let i = 0; i < trios; i++) {
    // Ajouter l'image (en fonction de l'index, vous pouvez ajuster l'image ici)
    imagesToShow.push(co2); // Si `pairs` est plus grand que `imageUrls`, cela boucle les images
  }

  return (
    <div className="game-container">
      <div className="scoreboard">
        <p>Molécules créées : </p>
        {imagesToShow.length > 0 ? (
          // On boucle sur chaque image dans imagesToShow
          imagesToShow.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              style={{
                height: "30px", // Vous pouvez ajuster la taille ici
                margin: "5px", // Optionnel : ajout d'un peu d'espace entre les images
              }}
            />
          ))
        ) : (
          <p></p>
        )}
        <p>Atomes capturés :</p>
        {imagesSelectionnees.length > 0 ? (
          // On boucle sur chaque image dans imagesToShow
          imagesSelectionnees.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              style={{
                height: "30px", // Vous pouvez ajuster la taille ici
                margin: "5px", // Optionnel : ajout d'un peu d'espace entre les images
              }}
            />
          ))
        ) : (
          <p></p>
        )}
      </div>
      <div className="game-area">
        {gameOver
          ? // Si gameOver est vrai, afficher une grande quantité de bulles de type "B"
            Array.from({ length: 100 }).map((_, index) => (
              <div
                key={`bubble-B-${index}`}
                className="bubble bubble-B"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              ></div>
            ))
          : // Sinon, afficher les bulles normales
            bubbles.map((bubble) => (
              <div
                key={bubble.id}
                className={`bubble bubble-${bubble.type}`}
                style={{ left: `${bubble.positionX}%` }}
                onClick={() => handleBubbleClick(bubble.id, bubble.type)}
              ></div>
            ))}
      </div>
    </div>
  );
};

export default BubbleGame;
