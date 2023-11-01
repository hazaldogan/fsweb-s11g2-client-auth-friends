import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import { useAuth } from "../contexts/AuthContext";

export default function FriendsList() {
  const { axioWithAuthInstance } = useAuth();
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axioWithAuthInstance
      .get("friends")
      .then((res) => {
        console.log("/friends", res);
        setFriends(res.data);
      })
      .catch((err) => {
        console.log("/friends", err);
      });
  }, []);

  return (
    <div>
      <h2>FRIENDS LIST</h2>
      <ul className="list">
        {friends.map((friend, key) => (
          <NavLink key={key} to={`/friends/${friend.id}`}>
            <li>
              - {friend.name}-{friend.email}
            </li>
          </NavLink>
        ))}
      </ul>
    </div>
  );
}
