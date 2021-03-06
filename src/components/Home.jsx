import React from "react";
import ItemCard from "./ItemCard";
import Data from "./Data";
const Home = () => {
    return (
        <>
           <h1 className="text-center mt-3">Productos</h1>
              <section className="py-4 container">
                    <div className="row justify-content-center">
                        {Data.productData.map((item, index)=>{
                            return(
                                <ItemCard 
                                  img={item.img}
                                  title={item.title}
                                  desc={item.desc} 
                                  price={item.price} 
                                  detail={item.detail}
                                  item={item} 
                                  key={index} 
                                />
                            )
                        })}



                    </div>
              </section>
        </>
    );
};

export default Home;