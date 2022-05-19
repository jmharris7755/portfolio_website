import "./topbar.scss"
import {Person, Mail} from "@material-ui/icons"

export default function Topbar() {
    return(
        <div className="topbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">top.</a>
                    <div className="itemContainer">
                        <Person classname="icon"/>
                        <span>+44 924 12 74</span>
                    </div>
                    <div className="itemContainer">
                        <Mail classname="icon"/>
                        <span>name@myemail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger">
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}