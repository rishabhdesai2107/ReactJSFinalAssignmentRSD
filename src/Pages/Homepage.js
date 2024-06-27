import {Link} from 'react-router-dom';
import '../css/Homepage.css';



export default function Homepage(){
    return (
        <div>
      <header className="headers">
        <h1>Hi there! Rishabh here, Welcome to My Home Page.</h1>
      </header>
      <div className="container">
        <p>"Click the login button to access your dashboard." </p>
        <Link to="/Loginpage">
          <button id="buttons">Login</button>
        </Link>
      </div>
    </div>

    );
}