import ThemeContext from '../context/ThemeContext';
import './Playbutton.css';
import { useState, useContext } from 'react';

function Playbutton({message, children, onPlay, onPause }){
    const theme = useContext(ThemeContext);
    
    const [playing, setPlaying] = useState(false);
    function handleClick(){
       if(playing) onPause()
       else onPlay();


       setPlaying(!playing);
    }

    return (
    <button className={theme} onClick={handleClick}>{children} :{playing?'>':'||'}</button>
    )
}
export default Playbutton