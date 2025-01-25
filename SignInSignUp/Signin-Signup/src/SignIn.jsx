
import "./SignIn.css"

function SignIn() {
  return (
    <div>
      <label>E-mail</label>
      <input type="email" />
      <label>Password</label>
      <input type="password" />
      <button>Sign In</button>
      <a href="#">Forget password?</a>
      <button>Sign Up</button>
    </div>
  )
}

export default SignIn;
