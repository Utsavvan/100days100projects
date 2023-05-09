import Card from './Card';

const Cards = ( {photos}) => {
    return (
        <div className="container card-columns mt-3">
        {photos.map((photo) => (
          <Card image={photo} />
        ))}
      </div>
    )
}
export default Cards;