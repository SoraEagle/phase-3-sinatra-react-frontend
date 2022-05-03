import React, {useContext} from "react";
// import {ItemsContext} from "./context/MyItems.js";

function Item(){
    // const {Item, setItem} = useContext(ItemsContext);

    function deleteItem(){
    //     fetch(`http://localhost:9292/item/${item.id}`, { // DELETE fetch request.
    //     method: "DELETE",
    // })
    // .then((r) => r.json())
    // .then(() => onDeleteItem(item)); // Invoke the onDeleteCoin function with this fetch request.
    }

    function onDeleteItem(deletedItem){
        // const updatedItems = .filter((coin) => .id !== deletedItem.id);
    }

    function updateItem(){
        // 
    }

    return(
        <div style={{
            borderBottom: "2px solid black",
            paddingBottom: "10px",
            marginBottom: "12px",
          }}>
            {/*  */}
        </div>
    );
}

export default Item;