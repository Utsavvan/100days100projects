const Recipes = ({ recipes }) => {
  const { label, image, ingredientLines, cuisineType } = recipes?.recipe;
  return (
    <div className="col-md-4">
      <div className="card mb-4 box-shadow">
        <div className="card-header">
          <h4 className="my-0 font-weight-normal">{label}</h4>
        </div>
        <hr />
        <div className="card-body">
          <img src={image} alt="" />
          <p> Ingredients </p>
          <ul className="list-unstyled mt-3 mb-4">
            {ingredientLines.map((Line) => (
              <li key={Line}>{Line}</li>
            ))}
          </ul>
          <hr />
          <div>
            <p> Cuisine Type </p>
            <ul className="cuisineType list-unstyled mt-3 mb-4">
              {cuisineType.map((Line) => (
                <li key={Line}>{Line}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
