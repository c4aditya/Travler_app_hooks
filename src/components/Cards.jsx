import data from "../Data";
import NewCard from "./NewCard";
import "./card.css";
import { useState } from "react";

function Card(){
    const [card ,  setCard]= useState(data)
    // console.log(data)
    const deleteHandler = (id) =>{
        console.log("Deleting card with id:", id); // Debugging
        const updatedCards = card.filter(card => card.id !== id); // Remove card by id
        console.log("Updated Cards:", updatedCards); // Debugging to see the updated state
        setCard(updatedCards); // Update the state with remaining cards;
    }
    return(
<div>
<div>
    <div className="ro">
        {
            card.map((items) =>
            <NewCard key={items.id} id ={items.id}  place={items.place} image={items.image} price={items.price} onDelete={deleteHandler} />
            )
        }
    

    </div>
</div>
</div>
    )
}

export default Card;