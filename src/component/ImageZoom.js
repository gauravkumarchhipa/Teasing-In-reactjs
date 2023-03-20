import React from 'react'
import { FullScreen, useFullScreenHandle } from "react-full-screen";
// import ReactImageMagnify from 'react-image-magnify';

const ImageZoom = () => {
  const handle = useFullScreenHandle();
  return (
    <div>
      <button onClick={handle.enter}>
        Enter fullscreen
      </button>

      <FullScreen handle={handle}>
        <img src="https://cdn.pixabay.com/photo/2016/02/19/15/46/labrador-retriever-1210559__480.jpg" alt=''
        style={{width : "200px"}}/>
       
        
      </FullScreen>
        <br/>
    </div>
  )
}

export default ImageZoom