import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import s from'./App.module.css'
import  { Menu } from './components/menu'
import bannerImg from '/bannerImg.jpg'
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { useState } from 'react'

const MAP_LAYERS = {
  normal: {
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  },
  satellite: {
    url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
  }
}

function App() {

  const [mapType, setMapType] = useState('normal')
  const position = [-25.3943714,-49.2333797]
  const currentLayer = MAP_LAYERS[mapType]

  return (
    <>
      <Menu/>
        <div className={s.wraphome}>
          <div className={s.section1}>
              <div className={s.wrapImage}>
                <img className={s.imgSection} src={bannerImg} alt='banr'/>
              </div>
              <div className={s.wrapTexts}>
                <h1 className={s.tituloSection1}>Title</h1>
                <p className={s.textSection1}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum. </p>
                <button className={s.btnSection1}>CLIQUE</button>
              </div>
          </div>

          <div className={s.section2}>
            <iframe className={s.vid} src="https://www.youtube.com/embed/oZ1igglWDTc?si=mYOAZ-CfTPPuGv33" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>

          <div className={s.section3}>
            <div className={s.wrapImage}>
                <img className={s.imgSection2} src={bannerImg} alt=''/>
              </div>
              <div className={s.wrapTexts2}>
                <h1 className={s.tituloSection2}>Title</h1>
                <p className={s.textSection2}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.</p>
              </div>
          </div>

          <div className={s.section4}>
            

            <div className={s.mapa}>
                <div className={s.mapaSection}>
                  <div className={s.mapControls}>
                    <button
                      type="button"
                      className={`${s.mapBtn} ${mapType === 'normal' ? s.activeBtn : ''}`}
                      onClick={() => setMapType('normal')}
                    >
                      Normal
                    </button>
                    <button
                      type="button"
                      className={`${s.mapBtn} ${mapType === 'satellite' ? s.activeBtn : ''}`}
                      onClick={() => setMapType('satellite')}
                    >
                      Satélite
                    </button>
                  </div>

                  <div className={s.mapa2}>
                    <MapContainer className={s.mapCont} center={position} zoom={13} scrollWheelZoom={false}>
                      <TileLayer
                        key={mapType}
                        attribution={currentLayer.attribution}
                        url={currentLayer.url}
                      />
                      <Marker position={position}>
                        <Popup>
                          A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                      </Marker>
                    </MapContainer>
                  </div>
                </div>
            </div>

          </div>
        </div>
    </>
    
  )
}

export default App
