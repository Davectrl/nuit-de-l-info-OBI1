
import coeur_image from '../assets/coeur.png'
import './intro.css'
import { useNavigate } from 'react-router-dom'


function Coeur() {
  const navigate = useNavigate ();

  return (
    <>
      <div className='Container Container_principal'>
        <div className='Titre'>
          <h1>Circulation thermohaline → Cœur</h1>
        </div>
        <div className='Container Container_infos'>
          <div className='Container Container_description'>
            <p>Ce système agit comme le cœur humain, pompant les eaux chaudes et froides autour du globe, ce qui régule la température et la salinité des océans. Une perturbation de cette circulation pourrait affecter l’ensemble du "métabolisme" climatique mondial, tout comme un cœur malade affecte tous les systèmes du corps</p>
          </div>
          <div className='Container Container_image_text'>
            <div className='container_image'>
              <img src={coeur_image} />  
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

export default Coeur
