import { useContext } from "react";
import VideoDispatchContext from "../context/VideoDispatchContext.jsx";



  function useVideoDispatch(){
    return  useContext(VideoDispatchContext)
  }

  export default useVideoDispatch