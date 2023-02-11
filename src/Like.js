import { useState } from "react";
import imageLike from "./attachment/black-hart.png";
import imageHeart from "./attachment/red-hart.png";

function Like() {

    const [like, setLike] = useState(imageLike);

    const updateLikes = () => {
        if (like === imageLike) {
            setLike(imageHeart);
          } else {
            setLike(imageLike);
          }
    }
    return(

        <div>
                <button className="btn-like" onClick= { updateLikes }><img src={like} alt="heart" width="30px"/></button>
               
               </div>
    )
}
export default Like;