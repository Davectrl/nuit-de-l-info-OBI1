import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import gulf_stream_image from '../assets/gulf_stream.png'
import './intro.css'
import ndli from '../assets/ndli.png'
import { useNavigate } from 'react-router-dom'


function Gulf_stream() {
  const navigate = useNavigate();
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='Container Container_principal'>
        <div className='Titre'>
          <h1>Gulf Stream = Système sanguin</h1>
        </div>
        <div className='Container Container_infos'>
          <div className='Container Container_description'>
            <p>Le Gulf Stream est un courant océanique chaud qui transporte de grandes quantités d’eau depuis les régions tropicales vers l’Atlantique Nord. Ce courant joue un rôle crucial dans la régulation du climat, un peu comme une artère qui transporte le sang dans un organisme.</p>
          </div>
          <div className='Container Container_image_text'>
            <div className='container_image'>
              <img src={gulf_stream_image} />  
            </div>
            <div className='container_text'>
              <div className='container_text_titre'>
                <p>Explications</p>
              </div>
              <div className='container_text_infos'>
                <p>De manière similaire au système sanguin qui distribue l'oxygène et les nutriments dans le corps, le Gulf Stream redistribue la chaleur et influence les systèmes climatiques. Son affaiblissement dû au réchauffement climatique perturbe cette régulation et pourrait entraîner des conséquences majeures, comme un ralentissement de la circulation océanique globale.</p>
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

export default Gulf_stream
