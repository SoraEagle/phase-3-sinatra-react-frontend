import React, {useEffect, useState} from "react";

const ItemsContext = React.createContext();

function ItemsProvider({children}){
    const [items, setItems] = useState([]); // State variables for setting a list of the API's items.
    useEffect(() => {
      fetch("http://localhost:9292/items") //default GET request to the database.
        .then((r) => r.json())
        .then((data) => setItems(data)); // sets items.
    }, []);

    return(
      <ItemsContext.Provider value={{items, setItems}}>
        {children}
      </ItemsContext.Provider>
    );
}
  
export {ItemsContext, ItemsProvider};