import "./intro.scss"
import Typewriter from 'typewriter-effect'

export default function Intro() {

    return(
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="" alt=""/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hello! I'm</h2>
                    <h1>Justin Harris</h1>
                    <h3>CS Graduate 
                        <span>
                            <Typewriter
                                options={{
                                    strings: ["University of Idaho", "Software Engineer"],
                                    autoStart: true,
                                    delay:75,
                                    loop:true
                            }}/>
                        </span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/downArrow.png" alt=""/>
                </a>
            </div>
        </div>
    )
}