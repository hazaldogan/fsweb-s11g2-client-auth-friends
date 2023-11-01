import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function Login() {
  const { loginUserAPI, isLoggedIn } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { username: "workintech", password: "wecandoit" },
  });
  const history = useHistory();
  const onSubmitHandler = (data) => {
    console.log(data);
    loginUserAPI(data);
  };

  useEffect(() => {
    if (isLoggedIn()) {
      history.push("/friends");
    }
  }, [isLoggedIn()]);

  console.log(errors);

  return (
    <div>
      <h2>LOGIN</h2>
      <div className="form">
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <div className="inputGroup">
            <label htmlFor="username">USERNAME</label>
            <input
              id="username"
              type="text"
              placeholder="workintech"
              {...register("username", { required: "This field is required" })}
            />
            {errors.username && (
              <div className="error">{errors.username.message}</div>
            )}
          </div>
          <div className="inputGroup">
            <label htmlFor="password">PASSWORD</label>
            <input
              id="password"
              type="password"
              placeholder="wecandoit"
              {...register("password", { required: "Pass field is required" })}
            />
            {errors.password && (
              <div className="error">{errors.password.message}</div>
            )}
          </div>
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
