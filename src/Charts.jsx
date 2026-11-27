import { useState } from 'react'
import s from './Charts.module.css'
import  { Menu } from './components/menu'
import  { GBarra } from './components/barChart'
import  { GPizza } from './components/pizzaChar'
import  { GLinha } from './components/lineChart'

function Charts(){

    const [show, setShow] = useState("")

    return(
        <>
            <Menu/>

            <div className={s.wrapCharts}>
                <div className={s.wrapBtns}>
                    <button className={s.btn} onClick={() => setShow("BAR")}>BAR</button>
                    <button className={s.btn} onClick={() => setShow("PIZZA")}>PIZZA</button>
                    <button className={s.btn} onClick={() => setShow("LINE")}>LINE</button>
                </div>
                
                {show === "BAR" && <GBarra/>}
                {show === "PIZZA" && <GPizza/> }
                {show === "LINE" && <GLinha/>}

            </div>
        </>
        
    )
}

export default Charts