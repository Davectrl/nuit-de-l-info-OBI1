
import './Intro.css'
import ndli from '../assets/ndli.png'
import { useNavigate } from 'react-router-dom'
import VolumeControl from '../Components/CrazyVoice'

function Intro() {

  const navigate = useNavigate();

  return (
    <>
      <div className='Container Container_principal'>
        <div className='Titre'>
          <h1> l'eau c'est beau</h1>
        </div>
        <div className='Container Container_infos'>
          <div className='Container Container_description'>
            <p>
                Bonjour explorateur, vous prétendez être un humain ? Permettez nous de douter de cela. Vous allez devoir nous prouvez votre identité.
                Quoi de mieux pour cela que de recréer les conditions de vie nécessaire à votre survie (si vous êtes un honnête humain bien sur). 
                En effet, que cela soit pour nos océans ou pour chaque être humain, il faut un mixte d'un peu de CO2 et d'O2. 
                Vous devez donc recréer 4 molécules d'O2 en attrapant les atomes d'oxygen et 2 molécules de CO2 en attrapant 2 atomes d'oxygen et 1 atome de carbone.
                Bonne chance.
            </p>
            <button
            onClick={() => navigate("/CaptCha")}
          >
            CaptCha
          </button>
          </div>
          <div className='Container Container_image_text'>
            <VolumeControl imageSrc={ndli} />
            
            
          </div>

        </div>
        
      </div>
    </>
  )
}

export default Intro
