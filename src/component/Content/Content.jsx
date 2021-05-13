import s from './content.module.css'
import ChessBoard from "./ChessBoard/ChessBoard";
import Navbar from "./Navbar/Navbar";
import {Route} from "react-router";

const Content = (props) => {
    return (
        <div>
            <div className={s.content}>
                <ChessBoard/>
                <Route path={'/'} render={() => <Navbar/>}/>
            </div>
        </div>
    );
}

export default Content;