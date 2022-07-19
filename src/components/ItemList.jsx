import ItemCard from "./ItemCard";

const ItemList = ({ items }) => {
  return (
    <div className="container">
      <div className="row">
        {items.map((ItemCard) => (
          <div key={ItemCard.id} className="col-sm">
            <ItemCard item={ItemCard} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;