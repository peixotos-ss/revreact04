import { useState } from 'react'
import s from './Contact.module.css'
import { use } from 'react'
import  { Menu } from './components/menu'


function Contact(){

    const[nome, setNome] = useState("")
    const[assunto, setAssunto] = useState("")

    const enviar = () => {
        const mensagem = `Gostaria de entrar em contato\n\nNome${nome} \nAssunto:${assunto}`
        const msg = encodeURIComponent(mensagem)
        window.open(`https://wa.me/5541999999999?text=${msg}`)
    }

    return(
        <div className={s.wrapContact}>
            <Menu/>

            <div className={s.formulario}>
            <div className={s.wrapInputs}>
                <label htmlFor='nome'>Nome</label>
                <input className={s.inputData} type="text" placeholder='INsira seu nome' value={nome} onChange={(e) => setNome(e.target.value)}/>
            </div>

            <div className={s.wrapInputs}>
                <label htmlFor='assunto'>Assunto</label>
                <input className={s.textAreaData} type="text" placeholder='INsira o assunto' value={assunto} onChange={(e) => setNome(e.target.value)}/>
            </div>
            <button className={s.btn} onClick={enviar}>ENVIAR</button>
        </div>
        </div>
        
    )
}

export default Contact