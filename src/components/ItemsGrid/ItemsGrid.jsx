import "./ItemsGrid.css";

function ItemsGrid({ items }) {
  
  return (
    <div className="grid">
      {items.map((item) => (
        <div className="grid-item" key={item.id}>
          <img src={item.image} alt={item.name} title={item.name}/>
        </div>
      ))}
    </div>
  );
}

export default ItemsGrid;
