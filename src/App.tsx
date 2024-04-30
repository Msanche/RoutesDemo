import { useNavigate } from 'react-router-dom'
import './App.css'

function App() {
  const navigate = useNavigate();

  return (
    <>
      <div>
       <h1>Main Page!!</h1>
       <p>This is the main page </p>
       <p>Navigation</p>
       <nav>
        <ul>
          <li>
            <button onClick={() => navigate('profile')}>Go to Profile page</button>
          </li>
        </ul>
       </nav>
      </div>
    </>
  )
}

export default App

