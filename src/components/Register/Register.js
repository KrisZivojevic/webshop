import { useState } from "react";
import { validate } from "../../helpers/helpers";
import classes from "./Register.module.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const values = Object.fromEntries(data.entries());

    if (validate(values)) {
      let items = localStorage.getItem("register");

      if (items === null) {
        localStorage.setItem("register", JSON.stringify([]));
      }

      items = localStorage.getItem("register");
      const prevRegistered = JSON.parse(items);

      const isRegistered = prevRegistered.find(
        (user) => user.email === values.email
      );

      if (!!isRegistered) {
        setIsError(true);
      } else {
        setIsError(false);
        localStorage.setItem(
          "register",
          JSON.stringify([...prevRegistered, values])
        );
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={classes.register__wrapper}>
        <span className={classes.register__title}>Sign Up</span>
        <input type="username" placeholder="Username" name="username" onChange={(event) => setUsername(event.target.value)} />
        <input type="email" placeholder="Email Address" name="email" onChange={(event) => setEmail(event.target.value)} />
        <input type="password" placeholder="Password" name="password" onChange={(event) => setPassword(event.target.value)} />
        {isError && <p className={classes.register__error}>User is already registered.</p>}
        <button disabled={email.length === 0 || password.length === 0 } className={classes.register__button}>Sign Up</button>
      </div>
    </form>
  );
};

export default Register;
