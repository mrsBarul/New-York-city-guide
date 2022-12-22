import { dataTitle } from "./dataTitle";
import { useState } from "react";
import back from './back.png'
import next from './next.png'

function Title () {

    const [header, setHeader] = useState(0)
    const { title } = dataTitle[header]

    const backTitle = () => {
        setHeader((header => {
            header --;
            if(header < 0) {
                return dataTitle.length-1
            }
            return header;
        }))
    }

    const nextTitle = () => {
        setHeader((header => {
            header ++;
            if (header > dataTitle.length-1) {
                header = 0
            }
            return header;
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
