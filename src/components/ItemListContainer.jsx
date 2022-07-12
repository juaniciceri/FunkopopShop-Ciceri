import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import img1 from '../img/img1.png';
import img2 from '../img/img2.jpg';
import img3 from '../img/img3.jpg';


function ItemListCointainer (props) {
    const ItemsDATABASE = [
        {
            id:1,
            title: 'Doctor Octopus',
            img:"img1.",
            desc:'',
            price: 8.500,
        },
        {
            id:2,
            title: 'Avenngers Hulk',
            img:"img2",
            desc:'',
            price: 7.780,
        },
        {
            id:3,
            title: 'IronMan',
            img:"img3",
            desc:'',
            price: 7.300,
        },
    ];

    let [items, setItems]= useState([]);

    console.log("%c Render ItemListContainer", "color: green");
    console.log(items);


    useEffect( 
        ()=>{
            let promiseItems = new Promise((resolve, reject) => {
            setTimeout(
                ()=> {
                    resolve(ItemsDATABASE);
                },
            2000);
        });
        promiseItems.then(
            (respuesta)=> {
                setItems(ItemsDATABASE);
            }
        ).catch(
            (errorMsg) => console.error(errorMsg)
        )
    },
        []
    )


return (
    <ItemList items={items}/>
);
};

export default ItemListCointainer;