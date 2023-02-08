import { useState } from "react";

const Carousel = ({ picture }) => {
    
    const [images,setImages] = useState(0)

    const previousImage  = () => {
    setImages((images => {
        images --;
        if (images < 0){
        return picture.length -1;
        
    }
        return images;
    }))
}


    const nextImage  = () => {
    setImages ((images => {
        images ++;
        if (images > picture.length -1){
        images = 0
    }
        return images;
    }))
}
return(
    <div className="slideshow-container">
    <button className='btn-slide' onClick={previousImage}>❮</button>
    <img src={picture[images]} alt="jewerly" width="600px"/>
    <button className='btn-slide next' onClick={nextImage}>❯ </button>
  </div>
)
}
export default Carousel;