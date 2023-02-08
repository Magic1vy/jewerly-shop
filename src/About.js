import imageFamily from "./attachment/family.jpeg"

function About(){
    return(
        <div className="about">
            <h2>Welcome to Our Jewelry Store!</h2>
            <p>We are a family-owned business that has been providing stunning jewelry pieces to our customers since 1969. With a long history of experience and passion for the craft, we are dedicated to bringing you the best in quality, style, and customer service.</p>
            <p>Over the years, we have established a reputation for excellence and a loyal following of customers who appreciate our attention to detail and commitment to customer satisfaction. Our team of skilled artisans and designers are dedicated to crafting beautiful pieces that will last a lifetime and become cherished family heirlooms.</p>
            <p>From our humble beginnings as a small, local jewelry store, we have expanded our offerings to include a wide range of styles and designs, including contemporary and traditional pieces, custom-designed pieces, and one-of-a-kind treasures. Whether you're looking for the perfect engagement ring, a special gift, or a new addition to your jewelry collection, we have something for everyone.</p>
            <p>We take great pride in providing a warm and welcoming shopping experience for all of our customers. Our knowledgeable staff is always available to assist you in finding the perfect piece, and our commitment to quality and value is evident in every item we sell.</p>
            <p>We invite you to visit our store and see for yourself why we have been the trusted choice for jewelry lovers for over five decades. Whether you're looking for a timeless piece or a contemporary statement, we have the perfect item to suit your style and budget. Thank you for considering us as your go-to destination for all things jewelry.</p>
            <p>Sincerely, <br/>
The Heap Heap Jewerly Family</p>
<div className="family-img" >
<img src={imageFamily} alt="family" width="500px"/>
</div>
        </div>
    )
}
export default About;