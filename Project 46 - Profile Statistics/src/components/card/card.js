const Card = ({data}) => {
  return (
    <>
      <div className="card flex column center">
        <i className={data.icon}></i>
        <b>{data.value}</b>
        <strong>{data.description}</strong>
      </div>
    </>
  );
};

export default Card;
