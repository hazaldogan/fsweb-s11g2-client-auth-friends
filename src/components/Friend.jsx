import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useParams } from "react-router-dom";

export default function Friend() {
  const { axioWithAuthInstance } = useAuth();
  const [friend, setFriend] = useState([]);
  const { friendID } = useParams();

  useEffect(() => {
    axioWithAuthInstance
      .get("friends/" + friendID)
      .then((res) => {
        console.log("/friends/friendID", res);
        setFriend(res.data);
      })
      .catch((err) => {
        console.log("/friends/friendID", err);
      });
  }, []);

  return (
    <div>
      <h2>FRIEND: {friend.name}</h2>
      <div>
        EMAIL: {friend.email} <br />
        AGE: {friend.age} <br />
      </div>
    </div>
  );
}
