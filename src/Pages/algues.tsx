import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import algue_poumons from '../assets/algues.png'
import './rocher.css'
import ndli from '../assets/ndli.png'
import { useNavigate } from 'react-router-dom'


function Algues() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate();

  return (
    <>
      <div className='Container Container_principal'>
        <div className='Titre'>
          <h1>Algues (cyanobactéries) = Poumons</h1>
        </div>
        <div className='Container Container_infos'>
          <div className='Container Container_description'>
            <p>Les cyanobactéries, souvent considérées comme des "algues bleues", sont des micro-organismes photosynthétiques qui produisent une part importante de l'oxygène terrestre.</p>
          </div>
          <div className='Container Container_image_text'>
            <div className='container_image'>
              <img src={algue_poumons} />  
            </div>
            <div className='container_text'>
              <div className='container_text_titre'>
                <p>Explications</p>
              </div>
              <div className='container_text_infos'>
                <p>Ces cyanobactéries fonctionnent comme nos poumons : elles absorbent le dioxyde de carbone et libèrent de l'oxygène. Elles sont essentielles pour maintenir l'équilibre des gaz atmosphériques et la vie sur Terre, tout comme nos poumons sont vitaux pour la respiration humaine.</p>
              </div>
            
            </div>
          </div>

        </div>
        <button className='Bouton_retour'
        onClick={() => navigate('/Menu')}
        >Retours à la map</button>
      </div>
    </>
  )
}

export default Algues
