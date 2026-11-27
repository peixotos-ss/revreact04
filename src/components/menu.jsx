import s from'./menu.module.css'
import { Link } from 'react-router'

export const Menu = () => {
    return(
        <nav className={s.menu}>
            <Link to='/'>Home</Link>
            <Link to='/Charts'>Gráficos</Link>
            <Link to='/Products'>produtos</Link>
            <Link to='/Contact'>contLinktos</Link>
        </nav>
    )
}