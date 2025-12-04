const Card = ({ title, description, count }) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "16px",
        width: "200px",
        textAlign: "center",
      }}
    >
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Likes: {count}</p>
    </div>
  );
};

export default Card;
