import { useState } from "react";
import { dataNYC } from './dataNYC';
import './App.css';


function NYC() {


const [list, setList] = useState(dataNYC);
const [showText, setShowText] = useState(false)

const deletePlace = (id) => {
    let newList = list.filter(item => item.id !== id)
    setList(newList)
}

const showTextClick = (item) => {
    item.showMore = !item.showMore
    setShowText(!showText)
}

    return (
    <div className="containerNYC">
        <div className="placeNYC">
        {list.map(item => {
        const { id, name, image, description, showMore} = item;
        return(
            <div key={id}>
                <div className="containerPlace">
                    <div className="container">
                        <h2>{ id } - { name }</h2>
                    </div>
                    <div className="container">
                        <img src={ image } width='300px' height='400px' alt='intresting place'/>
                    </div>
                    <div className="container">
                        <p>{ showMore ? description : description.substring(0,90) + '....'  }</p>
                    </div>
                    <div className="container">
                        <button className='delete' onClick={ () => showTextClick(item)}>
                        { showMore ? 'Показать меньше' : 'Показать больше'}
                        </button>
                    </div>
                    <div className="container">
                        <button className='delete' onClick={() => deletePlace(id)}>Удалить место</button>
                    </div>
                </div>
            </div>
        )
        })}
        </div>
            <div className='btn'>
                <button className='deleteAll' onClick={() => setList([])}>Удалить все</button>
            </div>
    </div>
)
}

export default NYC;

