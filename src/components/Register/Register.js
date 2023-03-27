const Register = () => {
  //  TODO: create user in local storage
  return (
    <form>
      <label htmlFor="username">Username</label>
      <input type="username" name="username" />
      <label htmlFor="email">Email</label>
      <input type="email" name="email" />
      <label htmlFor="password">Password</label>
      <input type="password" name="password" />
    </form>
  )
}

export default Register;