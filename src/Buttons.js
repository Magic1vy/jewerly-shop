function Buttons({filtredItem}){
    return(
        <div> <h3>Shop with a filter: 
            <button className="btn" onClick = { ()=> filtredItem ("ring")}>Ring</button>
            <button className="btn" onClick = { ()=> filtredItem ("earrings")}>Earing</button>
            <button className="btn" onClick = { ()=> filtredItem ("necklaces")}>Necklaces</button>            
            <button className="btn" onClick = { ()=> filtredItem ("bracelet")}>Bracelet</button>
            </h3>
        </div>
    )}
    export default Buttons;
