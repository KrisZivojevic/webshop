const Login = () => {
  // TODO: login if user is registered
  return (
    <form>
      <label htmlFor="email">Email</label>
      <input type="email" name="email" />
      <label htmlFor="password">Password</label>
      <input type="password" name="password" />
    </form>
  )
}

export default Login;