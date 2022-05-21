import { useState } from "react";
import "./works.scss"

export default function Works() {

    const [curSlide, setCurSlide] = useState(0);

    const data = [
        {
            id: 1,
            title: "title1",
            description: "description1",
            icon: "assets/arrow.png",
            image: "assets/OnlyFactHome.png"
        },
        {
            id: 2,
            title: "title2",
            description: "description2",
            icon: "assets/arrow.png",
            image: "assets/OnlyFactHome.png"
        },
        {
            id: 3,
            title: "title3",
            description: "description3",
            icon: "assets/arrow.png",
            image: "assets/OnlyFactHome.png"
        },
    ];

    const handleClick = (way) =>{
        way === "left" ? setCurSlide(curSlide > 0 ? curSlide-1 : 2) : 
        setCurSlide(curSlide < data.length - 1 ? curSlide + 1 : 0)
    }

    return(
        <div className="works" id="works">
            <div className="slider" style={{ transform:`translateX(-${curSlide *100}vw)` }}>
                {data.map((d)=>(
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src={d.icon} alt="" />
                                </div>
                                <h2>{d.title}</h2>
                                <p>
                                    {d.description}
                                </p>
                                <span>Projects</span>
                            </div>
                        </div>
                        <div className="right">
                            <img src={d.image} alt=""/>
                        </div>
                    </div>
                </div>
                ))}
            </div>
            <img src="assets/arrow.png" className="arrow left" alt="" onClick={()=>handleClick("left")}/>
            <img src="assets/arrow.png" className="arrow right" alt="" onClick={()=>handleClick("right")}/>
        </div>
    )
}