import { useState } from 'react';
import Carousel from './Carousel';
import { dataFirstPage } from './dataFirstPage';
import Shop from "./Shop";



function Home (){

    const [home, setHome] = useState(dataFirstPage)

    const [showText, setShowText] =useState(false);

    const showTextClick = (item) =>{
        item.showText = !item.showText
        setShowText(!showText)
    }
    
    return(
        <div>
 {home.map((item =>{
        const {id, header, title, image, promo, description} = item;

        return(
            <div key={id}>
                <div className='cont'>
                        <h1>{header}</h1>
                    </div>
                    <div className='cont'>
                        <h2>{title}</h2>
                    </div>

                    <div className='cont'>
                <Carousel picture={image}/>
                </div>

                    <div className='cont'>
            <p>{promo}</p>
            </div>

                    <div className="offer">
                    <p>{showText ? description : description.substring(0,170) + "..."}
                        <button className='btn-more' onClick = { ()=> showTextClick (item)}> {showText ? "less" : "more" }</button></p>
            </div>
                    </div>


        )}))}

        <div className='cont'>
        <button className="orderNow">ORDER NOW</button>
        </div>
        <div>
        <Shop/>
        </div>


        </div>



    )
}
export default Home;