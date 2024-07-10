const Card = ({ imageSrc, title, description, buttonText, onButtonClick }) => {
  const handleButtonClick = () => {
    if (onButtonClick) {
      onButtonClick();
    }
  };

  return (
    <div className="card">
      <img src={imageSrc} alt={title} className="card-image" />

      <div className="card-content">
        <h2>{title}</h2>
        <p>{description}</p>

        <button onClick={handleButtonClick}>{buttonText}</button>
      </div>
    </div>
  );
};

export default Card;
