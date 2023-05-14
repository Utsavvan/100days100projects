import "./Card.css";

const Card = () => {
  const cardContents = [
    {
      id: 1,
      title: "Personalized Meal Plans",
      description:
        "Customers can fill out a questionnaire to help the website create a personalized meal plan based on their dietary restrictions or fitness goals. This feature would allow the website to offer a unique experience to each customer and provide them with the most suitable meals for their needs.",
    },
    {
      id: 2,
      title: "Flexible Subscriptions",
      description:
        "Customers can choose from a range of subscription options, including weekly, bi-weekly, or monthly delivery. This feature would allow customers to customize their experience and select a subscription that fits their lifestyle and preferences.",
    },
    {
      id: 3,
      title: "Nutritional Information",
      description:
        "The website can provide detailed nutritional information for each meal, including the calorie count, macronutrient breakdown, and ingredient list. This feature would allow customers to make informed choices about their meals and track their progress towards their fitness goals.",
    },
  ];
  return (
    <>
    <h3 className="cards-title feature-cards">WHAT WE DO</h3>
    <hr />
      <div className="cards feature-cards">
        {cardContents.map(({ id, title, description }) => (
          <div className="card" key={id}>
            <span className="title">{title}</span>
            <hr />
            <div className="description">
              <p>{description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
