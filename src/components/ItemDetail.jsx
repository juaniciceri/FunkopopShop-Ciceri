const ItemDetail = ({item}) => {
    return (
        <>
           <div className="bg-danger">
               <h1>{item.title}</h1>
               {item.disc > 50 ? 
               <h1 className="bg-warning">{item.disc}% OFF</h1>:
              <h1 className="bg-info">{item.disc}% OFF</h1>}
           </div>        
        </>
    );
}
 
export default ItemDetail;