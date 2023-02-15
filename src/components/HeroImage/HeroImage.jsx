import "./HeroImage.css";

function HeroImage({ hero }) {
  return (
    <div className="hero">
      <h1>{hero.name}</h1>
      <img
        src={hero.image}
        title={hero.name}
        alt={hero.name}
        className="hero-image"
      />
    </div>
  );
}

export default HeroImage;
