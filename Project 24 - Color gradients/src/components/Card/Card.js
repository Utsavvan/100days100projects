import "./Card.css";

const Card = ({color}) => {

    const {from , to} = color;
    console.log("🚀 ~ file: Card.js:6 ~ Card ~ color:", color)
  return (
    <>
      <div className="card flex">
        <div className="card-content">
          <div
            className="gradiant"
            style={{
              backgroundImage: `linear-gradient(to right, ${from}, ${to})`,
            }}
          ></div>
          <div className="gradiant-colors">
            {`${from} - ${to}`.toUpperCase()}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
