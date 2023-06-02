import { useSelector } from "react-redux";

function ImageList() {
  const users = useSelector((store) => store.User);

  return (
    <div className="d-flex flex-wrap">
      {users.map((user) => (
        <div className="card" key={user.userName} style={{"width": "18rem;"}}>
          <img className="card-img-top" style={{"width": "300px","height":"200px"}} src={user.userImage} alt={user.userName} />
          <div className="card-body">
            <h5 className="card-title"> {user.userName}</h5>
            <p>Total likes: {user.totalLikes}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ImageList;
