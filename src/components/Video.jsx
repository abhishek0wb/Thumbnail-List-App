import { useContext } from 'react';
import './Video.css';
import ThemeContext from '../context/ThemeContext';
import useVideoDispatch from '../hooks/VideoDispatch.jsx';

function Video({title,id,channel="Coder Dost",views,time,verified,children,editVideo}) {
  console.log('render Video')
 
  const theme = useContext(ThemeContext);
  const dispatch = useVideoDispatch();

  return (
      <>
      <div className={`container ${theme}`}>
      <button className='close' onClick={()=> dispatch({type:'DELETE', payload:id})}>X</button>  
      <button className='edit' onClick={()=>editVideo(id)}>Edit</button>  
      <div className="pic">
      <img src={`https://picsum.photos/id/${id}/160/90`} alt="Katherine Johnson" />
      </div>
      <div className="title">{title}</div>
      <div className="channel">{channel} {verified && '✅'} </div>
      <div className="views">
        {views} views <span>.</span> {time}
      </div>
      <div>
        {children}
      </div>
      </div>
      </>
  );
}

export default Video;



{/* we can use {condition ? action if its true : action if its false } */}
{/* example = {verified ?'✅': null} */}
 {/* another method is to use '&&' and
 example = {verified && '✅'} */}
 {/* sometime using && can print the boolean expression like 0 ,1 */}
 {/* even on the sitution where it don't pass the condition */}
