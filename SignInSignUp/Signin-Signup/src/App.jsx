import SignIn from "./SignIn"
import SignUp from "./SignUp"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<SignIn />}/>
        <Route path='/signUp' element={<SignUp/>}/>
      </Routes>
    </Router>
  )
}

export default App
