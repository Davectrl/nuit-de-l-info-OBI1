import plancton_nutriments from '../assets/plancton_nutriment.png'
import './Intro.css'

import { useNavigate } from 'react-router-dom'


function Plancton() {
  
  const navigate = useNavigate ();

  return (
    <>
      <div className='Container Container_principal'>
        <div className='Titre'>
          <h1>Plancton = Nutriments du corps humain</h1>
        </div>
        <div className='Container Container_infos'>
          <div className='Container Container_description'>
            <p>Les planctons, microscopiques mais essentiels, forment la base de la chaîne alimentaire marine en produisant ou transportant des nutriments pour d'autres organismes aquatiques.</p>
          </div>
          <div className='Container Container_image_text'>
            <div className='container_image'>
              <img src={plancton_nutriments} />  
            </div>
            <div className='container_text'>
              <div className='container_text_titre'>
                <p>Explications</p>
              </div>
              <div className='container_text_infos'>
                <p>Le rôle du plancton peut être comparé aux nutriments dans notre corps, qui soutiennent le fonctionnement cellulaire et énergétique. Sans eux, l'écosystème marin s'effondrerait, comme un corps privé de ses apports nutritionnels essentiels.</p>
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

export default Plancton
