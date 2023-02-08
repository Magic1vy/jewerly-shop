import image from "./attachment/delivery.jpeg"

function OrdersAndShipping (){
    return(<div>
<div className="cont">
    <h2>ORDER PROCESSING & SHIPPING</h2>
    <p>Prioritized processing is given to express shipping orders that have been upgraded, with a processing time of 1 business day, excluding peak seasons and holidays where it may take up to 3 business days. Please refer to the table below for a rough estimate of shipping timings (after your package has left our office).</p>
    <p>If you have placed an order for a "pre-order" item, shipment of your order will take place once all items included in the order are in stock.</p>
    <p>Orders shipped to Canada and the US will be accompanied by tracking information, but no signature will be required upon delivery. </p>
    <p>Orders Shipped Internationally: Once standard shipping international orders depart from our office, we cannot guarantee constant tracking updates. For more details on the delivery status of your package, it is advisable to reach out to your local post office as we will not have further information. Please be aware that we do not take responsibility for packages that are lost or not delivered using standard shipping. If you require guaranteed delivery, we suggest selecting the express shipping option. It's also important to note that international orders may be subject to import duties, taxes, VAT, and handling fees, which are not the responsibility of our company. The amount of duties and taxes incurred will vary based on the country. </p>
    <img src={image} alt="box" width="500px"/>
</div>
<div className="cont">
    <h2>RECEIVING YOUR ORDER</h2>
    <ul>If your tracking information indicates that your package has been delivered but you have not received it, here are a few steps you can take:
<li>Confirm the accuracy of the shipping address on your order.</li>
<li>Check for a notice of attempted delivery.</li>
<li>Look in hidden areas around your property.</li>
<li>Ask neighbors or others in your residence if they have accepted the delivery.</li>
<li>Give it an extra 1-2 days, as in some rare cases, packages have been marked as delivered before actually arriving.</li>
<li> If you are located outside North America, it's possible that the tracking number may not be updated in real-time on usps.com, or may not continue to be tracked after it has left the USA. In this case, it is recommended to check the tracking number with your local postal service (e.g. Royal Mail if you are located in the UK).</li>
</ul>
<p>While our store cannot be held responsible for lost or stolen packages, we will do our utmost to assist you in locating and retrieving your package. If the package was not delivered due to an incorrect address provided, there will be additional shipping charges to resend the package.</p>
</div>
</div>
    )
}
export default OrdersAndShipping;