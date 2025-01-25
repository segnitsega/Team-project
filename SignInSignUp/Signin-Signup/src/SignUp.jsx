
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div>
      <label>E-mail</label>
      <input type="email" />
      <label>Password</label>
      <input type="password" />
      <button>Sign Up</button>
      <p>
        Already have an account? <Link to="/">Sign in</Link>
      </p>
    </div>
  )
}

export default SignUp;
