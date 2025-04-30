type CardProperties = {
    name: string;
    image: string;
    description: string;
    price: number; 
  };
  
  function Card({name, image, description, price}: CardProperties) {
    return (
      <div className="instrument-card">
        <img className="image" src={image} alt={name} />
        <h3>{name}</h3>
        <p>{description}</p>
        <span className="price">${price}</span>
      </div>
    );
  };
  
  export default Card;