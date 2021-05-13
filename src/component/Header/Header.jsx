import s from './header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) =>{
    let path_logo = '';
    return(
        <div >
            <header className={s.head}>

                <img src={path_logo} alt={'Logo'}/>

                <div>
                    <NavLink to={'/game'}>
                        Game
                    </NavLink>
                    <NavLink to={'/tournaments'}>
                        Tournaments
                    </NavLink>
                    <NavLink to={'/broadcast'}>
                        Broadcast
                    </NavLink>
                </div>

                <div>
                    <span>Language</span>
                    <span>Login</span>
                </div>
            </header>
        </div>
    );
}

export default Header;