
import coraux_os from '../assets/coraux_os.png'
import './rocher.css'
import { useNavigate } from 'react-router-dom'


function Coraux() {

  const navigate = useNavigate ();

  return (
    <>
      <div className='Container Container_principal'>
        <div className='Titre'>
          <h1>Coraux = Os</h1>
        </div>
        <div className='Container Container_infos'>
          <div className='Container Container_description'>
            <p>Les récifs coralliens forment des structures solides qui abritent et protègent de nombreux écosystèmes marins.</p>
          </div>
          <div className='Container Container_image_text'>
            <div className='container_image'>
              <img src={coraux_os} />  
            </div>
            <div className='container_text'>
              <div className='container_text_titre'>
                <p>Explications</p>
              </div>
              <div className='container_text_infos'>
                <p>Les coraux peuvent être vus comme l'équivalent des os dans le corps humain : ils offrent un support physique et structurel. Lorsque les coraux sont détruits par le blanchissement ou la pollution, les écosystèmes marins qu’ils abritent perdent leur stabilité, comme un corps dont le squelette est fragilisé.</p>
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

export default Coraux
