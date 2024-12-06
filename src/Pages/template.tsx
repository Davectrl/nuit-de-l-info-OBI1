import './rocher.css'

import cursor from "../assets/cursor.png";
import zeroPour from "../assets/0pour.png";
import tenPour from "../assets/10pour.png";
import vingtPour from "../assets/20pour.png";
import trentePour from "../assets/30pour.png";
import quarantePour from "../assets/40pour.png";
import cinquantePour from "../assets/50pour.png";
import soixantePour from "../assets/60pour.png";
import soixanteDixPour from "../assets/70pour.png";
import quatreVingtPour from "../assets/80pour.png";
import quatreVingtDixPour from "../assets/90pour.png";
import centPour from "../assets/100pour.png";


import CrazyVoice from "../Components/CrazyVoice";
import { useNavigate } from 'react-router-dom';

function Template() {
  const navigate = useNavigate();

  return (
    <>
      <div className="Container Container_principal">
        <div className="Titre">
          <h1>Crazy Button</h1>
        </div>
        <div className="Container Container_infos">
          <div className="Container Container_description">
            <p>
              Ce bouton a pour but de vous rendre fou (en tout cas nous oui)
            </p>
          </div>
          <div className="Container Container_image_text">
            <div className="container_image">
              <CrazyVoice
                imageSrc={cursor}
                volumeImages={[
                  zeroPour,
                  tenPour,
                  vingtPour,
                  trentePour,
                  quarantePour,
                  cinquantePour,
                  soixantePour,
                  soixanteDixPour,
                  quatreVingtPour,
                  quatreVingtDixPour,
                  centPour,
                ]}
              />
            </div>
            <div className="container_text">
              <div className="container_text_titre">
                <p>Vous n'etês pas prêt</p>
              </div>
              <div className="container_text_infos">
                <p>
                  Ce bouton est trop Crazyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
                  #thuglife
                  La madame brûle comme la planète. Elle, c'est quand on monte le son, la planète, c'est quand on monte la pollution.
                </p>
              </div>
            </div>
          </div>
        </div>
        <button className='Bouton_retour'
        onClick={() => navigate('/Menu')}
        >Retours à la map</button>
        
      </div>
    </>
  );
}

export default Template;
