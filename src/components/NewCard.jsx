import "./newCard.css"

function NewCard({ id, place, image, price ,onDelete}) {
    
    function clickHandler(){
        console.log("Card clicked with id:", id);
        onDelete(id)
    }
    console.log(place)
    return (
      <div className="card">
        <h1>{id}</h1>
        <img src={image} alt={place} /> 
        <h1>{place}</h1>
         
        <h1>{price}</h1>     
            
       <button onClick={clickHandler}>Not intersted </button>
      </div>

  )}
  
  export default NewCard;
  