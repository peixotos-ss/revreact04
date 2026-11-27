import s from './card.module.css'
import Tilt from 'react-parallax-tilt';
import test from '/bannerImg.jpg'

export const Card = ({imagem, titulo, texto}) => {
    return(
        <Tilt tiltReverse perspective={600} >
            <div className={s.card}>
                <div className={s.wrapImg}>
                    <img className={s.imagem} src={imagem} alt='img prod'/>
                </div>
                <div className={s.wrpaCardTexts}>
                    <h2 className={s.cardTitle}>{titulo}</h2>
                    <p className={s.cardText}>{texto}</p>
                </div>
            </div>
        </Tilt>
    )
}