import {useState} from 'react';
import './AnimalShow.css';
import bird from './svg/bird.svg';
import cat from './svg/cat.svg';
import cow from './svg/cow.svg';
import dog from './svg/dog.svg';
import gator from './svg/gator.svg';
import heart from './svg/heart.svg';
import horse from './svg/horse.svg';


const svgMap = {
    bird, cat, cow, dog, gator, horse
}
// equivalent to bird: bird, cat: cat, etc. since the key and value are the same

function AnimalShow({ type }) {
    const [clicks, setClicks] = useState(0);

    const handleClick = () => {
        setClicks(clicks + 1);

    }
    // we only want one event handler (to handle both heart clicks and animal clicks)
    return (
        <div className='animal-show' onClick={handleClick}>
            <img className='animal' alt='animal' src={svgMap[type]}/>
            <img 
                className='heart'
                alt='heart' 
                src={heart} 
                style={{ width: 10 + 10 * clicks + 'px' }}
            />
        </div>
    )
}

export default AnimalShow;