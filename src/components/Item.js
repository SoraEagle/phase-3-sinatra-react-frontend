import React, {useContext} from "react";
import {ItemsContext} from "./context/MyItems.js";

function Item(){
    const {Items, setItems} = useContext(ItemsContext);

    function deleteItem({item}){
        fetch(`http://localhost:9292/item/${item.id}`, { // DELETE fetch request.
        method: "DELETE",
    })
    .then((r) => r.json())
    .then(() => onDeleteItem(item)); // Invoke the onDeleteCoin function with this fetch request.
    }

    function onDeleteItem(deletedItem){
        const updatedItems = Items.filter((item) => item.id !== deletedItem.id);
        setItems(updatedItems);
    }

    function updateItem(){
        // 
    }

    return(
        <div style={{
            borderBottom: "2px solid black",
            paddingBottom: "10px",
            marginBottom: "12px"
          }}>
              <button>Update</button>
              <button onClick={deleteItem}>Delete</button>
        </div>
    );
}

export default Item;

// Currently not connecting to the database for unknown reason...