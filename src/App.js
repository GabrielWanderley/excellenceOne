import './App.css';
import first from './assets/4490547-uhd_3840_2160_25fps.mp4';
import second from './assets/6529156-uhd_2160_4096_25fps.mp4';
import setaBranca from './assets/setaBranca.png'
import setaSkill from './assets/setaSkill.png'
import bruna from './assets/bruna.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import sla from './assets/pino-de-localizacao.png'
import 'leaflet/dist/leaflet.css';
import telefone from './assets/telefone 1.png'
import whats from './assets/whatsapp 1.png'
import insta from './assets/instagram 1.png'
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';


function App() {

  const position = [-8.591806762404444, -35.11465644507388]; 
  const markerIconUrl = sla;

  const customIcon = new L.Icon({
    iconUrl: markerIconUrl,
    iconSize: [32, 32],
  });

  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    centerMode: true,
    centerPadding: "20px", 
    arrows: false,          
    autoplay: true,         
    autoplaySpeed: 3000,  
  };

  useEffect(() => {
    AOS.init(); // Inicialize o AOS ao montar o componente

    // Opcional: configure as opções do AOS
    AOS.init({
      duration: 1000, // duração da animação em milissegundos
      easing: 'ease-in-out', // tipo de animação
      once: true // se deve animar apenas uma vez
    });

  }, []);
  return (
    <div className="App">
      <div className='blueDiv'>
        <div className='startDiv'>
          <div className='fistVideoDiv' data-aos="fade-right">
            <video autoPlay loop muted >
              <source src={first} type="video/mp4" />
              seu navegador não suporta isso
            </video>
          </div>
          <h1>Se cuide conosco</h1>
          <h1 className='h12' >consultorio Execellence</h1>
          <div className='secondVideoDiv ' data-aos="fade-left">
            <video autoPlay loop muted >
              <source src={second} type="video/mp4" />
              seu navegador não suporta isso
            </video>
          </div>
        </div>
        <div className='buttonStart'>
          <button> <img src={setaBranca} /> Fale conosco</button>
        </div>

        <div className='mainSkills '>
          <div className='skillsGridMain '>
            <div className='skillsMain ' data-aos="fade-right">
              <div className='skillMainText'>
                <h1>Lentes</h1>
                <p>
                  nosso dentista Guilherme Wanderley, expecialista em lestes de contato ira te dar o tão sonhado sorriso perfeito
                </p>
                <img src={setaSkill} />
              </div>
            </div>

            <div className='skillsMain' data-aos="fade-right">
              <div className='skillMainText'>
                <h1>Aparelho</h1>
                <p>
                  nosso tratamento ortodontico inovador, que promete entregar o seu melhor sorriso, o mais rapido possivel              </p>
                <img src={setaSkill} />
              </div>
            </div>

            <div className='skillsMain' data-aos="fade-right">
              <div className='skillMainText'>
                <h1>Emplantes</h1>
                <p>
                  não tenha mais vergonha de sorrir, venha  para excellence e volte a ter seu sorriso maravilhoso              </p>
                <img src={setaSkill} />
              </div>
            </div>
          </div>
        </div>
        <div className='aboutWe'>
          <div  className='aboutText' data-aos="fade-up">
            <h1><span>Excellence</span> <br /> Quem somos</h1>
            <p>
              nosso dentista Guilherme Wanderley, expecialista em lestes de contato ira te dar o tão sonhado sorriso perfeito nosso dentista Guilherme Wanderley, expecialista em lestes de contato ira te dar o tão sonhado sorriso perfeito nosso dentista Guilherme Wanderley, expecialista em lestes de contato ira te dar o tão sonhado sorriso perfeito nosso dentista Guilherme Wanderley, expecialista em lestes de contato ira te dar o tão sonhado sorriso perfeito
            </p>
          </div>
          <img src={bruna} style={{ float: 'right' }}  />
        </div>

        <div className='allSkils' data-aos="fade-right" >
          <h1>Nossos serviços</h1>
          <div className='allSkilsContent'>
            <p>Extração</p> <p>Limpeza</p> <p>Restauração</p> <p>Aparelho</p>
            <p>Lente</p> <p>Consulta</p> <p>Raio X</p>
          </div>
        </div>

        <div className='clients'>
          <h1>Clientes</h1>


          <Slider {...settings}>
            <div className='paciente'>
              <div className='pacientContent'>
                <h3>Otimo atendimento</h3>
                <p>uisdafhiasfhdiuhasdfidasfnasdfjnaskdfnaskjdfnsajknfasjfkdnasjfndfjkansdflkasjnjkndsajknfajksnfdakjndfaskjnfdasjkfnasjknfasdfkjlnasfdsafsadfsafasfasdfasfsafsafdfsadfsadfsafdasfdasfdafsasdfsdafsadfasfsafsafdsafsafdasdfsdfsdfsfdsdfdfs</p>
                <div className='pacienteImg'>
                  <img src={bruna} />
                  <h3>Ana Carla</h3>
                </div>
              </div>
            </div>
            <div className='paciente'>
              <div className='pacientContent'>
                <h3>Otimo atendimento</h3>
                <p>uisdafhiasfhdiuhasdfidasfnasdfjnaskdfnaskjdfnsajknfasjfkdnasjfndfjkansdflkasjnjkndsajknfajksnfdakjndfaskjnfdasjkfnasjknfasdfkjlnasfdsafsadfsafasfasdfasfsafsafdfsadfsadfsafdasfdasfdafsasdfsdafsadfasfsafsafdsafsafdasdfsdfsdfsfdsdfdfs</p>
                <div className='pacienteImg'>
                  <img src={bruna} />
                  <h3>Ana Carla</h3>
                </div>
              </div>
            </div>
            <div className='paciente'>
              <div className='pacientContent'>
                <h3>Otimo atendimento</h3>
                <p>uisdafhiasfhdiuhasdfidasfnasdfjnaskdfnaskjdfnsajknfasjfkdnasjfndfjkansdflkasjnjkndsajknfajksnfdakjndfaskjnfdasjkfnasjknfasdfkjlnasfdsafsadfsafasfasdfasfsafsafdfsadfsadfsafdasfdasfdafsasdfsdafsadfasfsafsafdsafsafdasdfsdfsdfsfdsdfdfs</p>
                <div className='pacienteImg'>
                  <img src={bruna} />
                  <h3>Ana Carla</h3>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      <div className='whiteDiv'>

        <div className='locationDiv'>
          <h1>localização</h1>
          <div className='locationVideo' data-aos="fade-right" >
            <img src={bruna} />
            <h3>R. Marquês de Olinda - Sirinhaém, PE, 55580-000</h3>
          </div>
          <div className='locationMap' data-aos="fade-left">
            <MapContainer center={position} zoom={55} className="map" >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='© OpenStreetMap contributors'
              />
              <Marker position={position} icon={customIcon} >
                <Popup>
                  <a href="https://maps.app.goo.gl/xhtSzcw6XSWYW9NJ8"> Consultorio Excellence </a>

                </Popup>
              </Marker>
            </MapContainer>
            <a src='https://www.google.com.br/maps/place/Excellence+odontologia/@-8.5919594,-35.1146561,20z/data=!4m6!3m5!1s0x7aa8509e378b07f:0xa0a76caa2d67135a!8m2!3d-8.591905!4d-35.1148077!16s%2Fg%2F11vbf4lkjq?entry=ttu'>
              clique aqui e tenha a localização pelo google maps
            </a>
          </div>
        </div>
       <div className='contacts'>
          <h1>Contatos</h1>
         <div className='contactsContent' data-aos="fade-right">
          <div className='telefone'>
           <img src={telefone}/>
           <h3>81 985815147</h3>
          </div>

          <div className='whats' data-aos="fade-right">
           <img src={whats}/>
           <h3><a>WhatsApp</a></h3>
          </div>

          <div className='insta' data-aos="fade-right">
           <img src={insta}/>
           <h3><a>Instagram</a></h3>
          </div>
         </div>
       </div>
      </div>
    </div>
  );
}

export default App;
