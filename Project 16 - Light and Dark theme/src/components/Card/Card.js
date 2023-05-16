import moment from 'moment';

const Card = ({data}) => {
  const {id ,title ,snippet ,length ,date} = data;
  return (
    <div className="card">
      <h3 className="card-title">{title}</h3>
      <div className="card-time">
        <span className='card-date'>{moment(date).format('dddd Do, YYYY')}</span> , 
        <span> {length} min read</span>
      </div>
      <div>
        <p>{snippet}</p>
      </div>
    </div>
  );
};

export default Card;
