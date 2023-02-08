
import { useState } from "react";
import { data } from "./data";
import Buttons from "./Buttons";
import imageLike from "./attachment/black-hart.png";
import imageHeart from "./attachment/red-hart.png";


function Shop (){

    const[jewerly, setJewerly] = useState(data);

    const [like, setLike] = useState(imageLike);


    const serchItem = ( searchTerm ) =>{
        const findItem = data.filter( item => item.searchTerm === searchTerm);
        setJewerly(findItem);
    }

    return(
        
<div>
            <div className="container">
            <Buttons filtredItem = {serchItem} />
            </div>

<div className="container">
    
    {jewerly.map((item =>{
        const {id, name, image, price } = item;

        const updateLikes = () => {
            if (like === imageLike) {
                setLike(imageHeart);
              } else {
                setLike(imageLike);
              }
        }
        return(
            <div key={id} >
                
            <div className="item" >
                <h2>{name}</h2>
                <img src={image} alt="jewerly" width="400px" height="600px"/>
               <div>
                <button className="btn-like" onClick= { updateLikes }><img src={like} alt="heart" width="30px"/></button>
               <h2>{price}</h2>
               </div>
                </div>
            

            </div>
        )
    }))}
    </div>
                <div className="container">
                <button className="orderNow">ORDER NOW</button>
                </div>
</div>
    )
}
export default Shop;