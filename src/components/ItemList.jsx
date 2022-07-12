import React from "react";

function ItemList(props) {
    console.log("Render ItemList", props.items);

    return (
        <>
        <h1>ItemList</h1>
        {
            props.items.map(
                cadaItem => 
                <div key={cadaItem.id} className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
            <div class="card p-0 overflow-hidden h-100 shadow">
            <img src={cadaItem.img} class="card-img-top img-fluid"/>
                    <div class="card-body text-center">
                           <h5 class="card-title">{cadaItem.title}</h5>
                           <h5 class="card-title">$ {cadaItem.price}</h5>
                           <p class="card-text">{cadaItem.desc}</p>
                    </div>
            </div>
        </div>
            )
        }
        </>
    )
}

export default ItemList;