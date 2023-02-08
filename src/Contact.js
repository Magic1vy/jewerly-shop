import image from './attachment/contact-img.jpeg'

function Contact (){
    return(
<div>
    <div className="cont">
        <h1>Contact Us</h1>
        </div>
        <div className="cont">
        <img src={image} alt="jewerly" width="500px" />
        <p> Our Customer Happiness Team is here for you and always eager to hear from you. Whether it's a question about your order, a request for styling assistance, or simply a friendly hello, they are more than happy to help. Despite being a small team, they are mighty in their efforts and gratitude towards our valued customers. Thank you for your support!</p>
        <p>We will respond to you promptly, within a time frame of 1-2 business days. Please keep in mind that our office is closed on weekends and holidays. </p>
    </div>
    <div className="form" >
        <h2>HELPFUL LINKS</h2>
        <p>In search of information? You may be able to find what you're looking for among the following pages! Explore our pages to find details on topics such as ordering and shipping, making a return, style advice, gifting options, and more.</p>
        <form>
            <label><span>*</span>First Name</label> <br/>
            <input type="text" name="name" required/> <br/>
            <label><span>*</span>Last Name</label> <br/>
            <input type="text" name="name" required/><br/>
            <label><span>*</span>Email Address</label> <br/>
            <input type="email" name="email" required/><br/>
            <label><span>*</span>What is your question?</label> <br/>
            <textarea name="message" required></textarea>
            <br/>
                <button className="cta" type="submit" value="submit">Submit</button>
        </form>
    </div>
</div>
    )
}
export default Contact;