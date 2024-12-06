
import poumon_robot from '../assets/poumons_robot.png'
import poumon_humain from '../assets/poumons_humain.png'
import './Intro.css'

import { useNavigate } from 'react-router-dom'


function Intro() {

  const navigate = useNavigate();

  return (
    <>
      <div className='fond'>
        <div className='Container Block_intro'>
          <div className='block_intro_Titre'>
            CAPTCHA
          </div>
          <div className='block_intro_Message'>
            <p>
                Bonjour explorateur·trice, vous prétendez être un·e humain·e ? Permettez nous de douter de cela. Vous allez devoir nous prouvez votre identité.
                Quoi de mieux pour cela que de recréer les conditions de vie nécessaire à votre survie (si vous êtes un·e honnête humain·e bien sur). 
                En effet, que cela soit pour nos océans ou pour chaque être humain·e, il faut un mixte d'un peu de CO2 et d'O2. 
                Vous devez donc recréer 4 molécules d'O2 en attrapant les atomes d'oxygen et 2 molécules de CO2 en attrapant 2 atomes d'oxygen et 1 atome de carbone.
                Bonne chance.
            </p>
          </div>
          <div className='block_intro_images'>
            <div className='block_intro_image1'>
              <img src={poumon_robot} />
            </div>
            <div className='block_intro_images_text'>
              <p>OU</p>
            </div>
            <div className='block_intro_image2'>
              <img src={poumon_humain} />
            </div>
          </div>
          <button
            onClick={() => navigate("/CaptCha")}
          >
            Commencer le test
          </button>
        </div>
    
            
          

      </div>
    </>
  )
}

export default Intro
