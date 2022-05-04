import React, {useContext} from "react";

function Item({item, onDeleteItem}){
    

    function deleteItem(){
        fetch(`http://localhost:9292/item/${item.id}`, { // DELETE fetch request.
        method: "DELETE",
    })
    .then((r) => r.json())
    .then(() => onDeleteItem(item)); // Invoke the onDeleteCoin function with this fetch request.
    }

    function updateItem(){
        // 
    }

    return(
        <div id="item" style={{
            borderBottom: "2px solid black",
            paddingBottom: "10px",
            marginBottom: "12px"
          }}>
              <p>#{item.name}</p>
              <button>Update</button>
              <button onClick={deleteItem}>Delete</button>
        </div>
    );
}

export default Item;

// Currently not fetching the item info from the database for unknown reason...