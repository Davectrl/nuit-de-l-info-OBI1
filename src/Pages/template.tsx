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

function Template() {

  return (
    <>
      <div className="Container Container_principal">
        <div className="Titre">
          <h1> l'eau c'est beau</h1>
        </div>
        <div className="Container Container_infos">
          <div className="Container Container_description">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus optio vero nobis labore molestiae, deleniti, ab esse
              nulla dolores fuga sapiente quod. At nostrum tenetur quos quo, et
              sunt modi!
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
                <p>Titre de la section</p>
              </div>
              <div className="container_text_infos">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Quidem maxime quo minima mollitia. Excepturi, suscipit! Vero
                  vel repellat, mollitia eum numquam delectus, reiciendis ab
                  vitae voluptatum dolor deleniti. Ad, voluptatem.
                </p>
              </div>
            </div>
          </div>
        </div>
        <button className='Bouton_retour'>Retours à la map</button>
        
      </div>
    </>
  );
}

export default Template;
