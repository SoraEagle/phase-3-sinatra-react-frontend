import React, {useContext, useState} from "react";
import {ItemsContext} from "./context/MyItems";
import Item from "./Item";

function Items(){
  const {items, setItems} = useContext(ItemsContext);
    const [name, setName] = useState('');
    const [trip, setTrip] = useState('');

    // const newItem = {
    //   // 
    // }

    function handleNameChange(e){
      setName(e.target.value);
    }

    function handleTripChange(e){
      setTrip(e.target.value);
    }

    function handleSubmit(e){
      e.preventDefault();
      // fetch("http://localhost:9292/items",
      // )
    }

    function onDeleteItem(deletedItem){
      const updatedItems = items.filter((item) => item.id !== deletedItem.id);
      setItems(updatedItems);
    }

    if(Item.length === 0) return(
    <div>
      <p>You have no items for your trips!</p>
      <img src="https://miro.medium.com/max/1280/1*-Nr0OP_Nu7b2NPrcgJ1SuA.png" alt="null"/>
      </div>);
      else console.log("Items: ", Items);

  return(
    <div id="items">
      <h2 style={{
        borderBottom: "2px solid black"
      }}>
        Submit New Item:
      </h2>
      <form onSubmit={handleSubmit}>
        <div><label><b>Name: 
          <input type="text" name="name" value="name" onChange={handleNameChange} />
        </b></label></div>
        <div><label><b>Trip: 
          <input type="text" name="trip" value="trip" onChange={handleTripChange} />
        </b></label></div>
        <button type="submit">Submit Item</button>
      </form>
      <h2 style={{
        borderBottom: "2px solid black",
        marginBottom: "12px",
        marginTop: "12px",
      }}>
        My Items:
      </h2>
      {items.map((item) => {
        return <h5 key={item.id}><Item item={item} onDeleteItem={onDeleteItem} /></h5>
      })}
    </div> 
  );
}

export default Items;