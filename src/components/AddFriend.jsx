import { useForm } from "react-hook-form";
import { useAuth } from "../contexts/AuthContext";

export default function AddFriend() {
  const { axioWithAuthInstance } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitHandler = (data) => {
    console.log(data);
    axioWithAuthInstance
      .post("friends", data)
      .then((res) => {
        console.log("/friendsADD", res);
      })
      .catch((err) => {
        console.log("/friendsADD", err);
      });
  };

  return (
    <div>
      <h2>ADD FRIEND</h2>
      <div className="form">
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <div className="inputGroup">
            <label htmlFor="name">NAME</label>
            <input
              id="name"
              type="text"
              placeholder="Golden"
              {...register("name", { required: "Name field is required" })}
            />
            {errors.name && <div className="error">{errors.name.message}</div>}
          </div>
          <div className="inputGroup">
            <label htmlFor="email">EMAIL</label>
            <input
              id="email"
              type="email"
              placeholder="friend@workintech.com.tr"
              {...register("email", { required: "Email field is required" })}
            />
            {errors.email && (
              <div className="error">{errors.email.message}</div>
            )}
          </div>
          <div className="inputGroup">
            <label htmlFor="age">AGE</label>
            <input
              id="age"
              type="number"
              placeholder="30"
              {...register("age", { required: "Age field is required" })}
            />
            {errors.age && <div className="error">{errors.age.message}</div>}
          </div>
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </div>
  );
}
