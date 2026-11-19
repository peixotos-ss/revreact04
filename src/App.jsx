import s from './App.module.css'
import { Menu } from './components/menu'
import a from '/a.png'

function App() {

  return (
    <>
      <Menu/>
        <div className={s.wrapHome}>
          <div className={s.section}>
            <div className={s.wrapImage}>
              <img className={s.imgSection}  width="560" height="415" src={a} alt="" />
            </div>
            <div className={s.wrapTexts}>
              <h1 className={s.tituloSection1}>titulo da pagina</h1>
              <p className={s.btnSection1}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit et omnis exercitationem optio nobis id sequi, laudantium ratione temporibus corrupti expedita veritatis odio inventore soluta tenetur incidunt consequatur fuga commodi!</p>
              <button className={s.btnSection}>clique aqui</button>
            </div>
          </div>
            <div className={s.section2}>
              <iframe className={s.vid} width="600" height="315" src="https://www.youtube.com/embed/fOGGTQn732I?si=BeJzeAyftAMZBqCg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>

          
        </div>
    
    </>
  )
}

export default App

