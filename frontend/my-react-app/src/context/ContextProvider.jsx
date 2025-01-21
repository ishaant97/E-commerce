import React, { useState } from "react";
import Context from "./Context";


const ContextProvider = ({ children }) => {

    const [productData, setProductData] = useState(null);

    return (
        <Context.Provider value={{ productData, setProductData }}>
            {children}
        </Context.Provider>
    )
}


export default ContextProvider