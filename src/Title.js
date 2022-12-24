import { dataTitle } from "./dataTitle";
import { useState } from "react";
import back from './back.png'
import next from './next.png'

function Title () {

    const [header, setHeader] = useState(0);
    let title = dataTitle[header]
    
    console.log(title)

    const backTitle = () => {
        setHeader((title => {
            title --;
            if(title < 0) {
                return dataTitle.length-1
            }
            return title;
        }))
    }

    const nextTitle = () => {
        setHeader((title => {
            title ++;
            if (title > dataTitle.length-1) {
                title = 0
            }
            return title;
        }))
    }

    return (
        <div className="containerTitle">
            <button className="titleBtn" onClick={backTitle}><img src={ back } width='80px' alt='back'/></button>
            <h1>{ title }</h1>
            <button className="titleBtn" onClick={nextTitle}><img src={ next } width='80px' alt='next'/></button>
        </div>
    )
}

export default Title;
