import React, {useEffect, useState} from "react";
import ItemDetail from "./ItemDetail";
import {useParams} from "react-router-dom";
import Data from "./Data";

const ItemDetailContainer = () => {
    const[item, setItem]=useState({});
    const params = useParams();
    const promise = new Promise((res,rej)=> {
        setTimeout( () => res(Data), 2000)
    });

    useEffect( () => {
        promise.then((response) => {
            const foundItem= response.filter((item)=> item.id == params.id)
            setItem(foundItem);
        })
    }, [])
    return <ItemDetail item={item}/>
};
 
export default ItemDetailContainer;