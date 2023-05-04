import { useContext, useState } from "react";
import { Link,  useNavigate } from "react-router-dom";
import { validate } from "../../helpers/helpers";
import classes from "./Login.module.css";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { AuthContext } from "../../context/AuthContext";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ isError: false, message: "" });
  const [register, setRegister] = useLocalStorage("register", []);
  const [user, setUser] = useLocalStorage("user", null);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const loginValues = Object.fromEntries(data.entries());

    if (validate(loginValues)) {
      const existingUser = register.find(
        (user) => user.email === loginValues.email
      );
      if (existingUser) {
        if (loginValues.password === existingUser.password) {
          setError({ isError: false, message: "" });
          login(existingUser)
        } else {
          setError({
            isError: true,
            message: "The entered password is incorrect.",
          });
        }
      } else {
        setError({ isError: true, message: "The user is not registered." });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className={classes.login__form}>
      <div className={classes.login__wrapper}>
        <span className={classes.login__title}>Login</span>
        <input
          type="email"
          placeholder="Email Address"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        {error.isError && (
          <p className={classes.login__error}>{error.message}</p>
        )}
        <p className={classes.login__redirection}>
          Don't have an account? Sign up <NavLink to="/register">here</NavLink>.
        </p>
        <button
          disabled={email.length === 0 || password.length === 0}
          className={classes.login__button}
        >
          Log in
        </button>
      </div>
    </form>
  );
};

export default Login;
