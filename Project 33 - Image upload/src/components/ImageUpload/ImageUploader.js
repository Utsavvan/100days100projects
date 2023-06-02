import {useState} from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../utils/ReduxStore/UserSlice";

function UserForm() {
  const dispatch = useDispatch();

  const [images,setImages] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    const {username , userimage } = event.target.elements

    const userName = username.value;
    let userImage = URL.createObjectURL(userimage.files[0]);
    dispatch(addUser({ userName, userImage }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" name="username" required />
      </label>
      <label>
        User image:
        <input type="file" name="userimage" accept="image/*" required />
      </label>
      <button type="submit">Add user</button>
    </form>
  );
}

export default UserForm;
