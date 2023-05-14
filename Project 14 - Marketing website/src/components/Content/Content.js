import "./Content.css";

const Content = () => {
  const paragraph =
    "At FitMeals, we believe that nutrition is the foundation of a healthy lifestyle. That's why we offer personalized meal delivery services for people with dietary restrictions or specific fitness goals. Our team of expert chefs and nutritionists creates delicious, healthy meals tailored to your needs and delivered right to your door. With FitMeals, you can fuel your body with the nutrients it needs to achieve your fitness goals and feel your best";

  return (
    <>
        <h2 className='content-title'>About us</h2>
        <hr />
      <div className="content">
        <p className="content-desc">{paragraph}</p>
      </div>
    </>
  );
};

export default Content;
