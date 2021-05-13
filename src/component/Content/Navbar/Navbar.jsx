import s from './navbar.module.css'
import {NavLink} from "react-router-dom";


const Navbar = (props) => {
    return (
        <div>
            <div className={s.navbar}>

                <NavLink to={'/selectionOfPlayers'} activeClassName={s.active}>
                    Selection of players
                </NavLink>

                <NavLink to={'/playWithFriend'} activeClassName={s.active}>
                    Play with friend
                </NavLink>

                <NavLink to={'/playingWithBot'} activeClassName={s.active}>
                    Playing with a bot
                </NavLink>
            </div>
        </div>
    );
}

export default Navbar;