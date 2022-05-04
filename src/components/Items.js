import React, {useContext} from "react";
import { ItemsContext } from "./context/MyItems";
import Item from "./Item";

function Items(){
    const {Items} = useContext(ItemsContext);

    if(Item.length === 0) return(
        <div>
          <p>You have no items for your trips!</p>
          <img src="https://miro.medium.com/max/1280/1*-Nr0OP_Nu7b2NPrcgJ1SuA.png" alt="null"/>
        </div>);
        else console.log("Items: ", Items);

      return(
        <div style={{
            // height: "90vh"
          }}>
              <h2 style={{
              borderBottom: "2px solid black",
              marginBottom: "12px",
              marginTop: "12px",
              }}>
                My Items:
              </h2>
              {Items.map((item) => {
                return <h5 key={item.id}><Item item={item} /></h5>
            })}
          </div> 
      );
}

export default Items;