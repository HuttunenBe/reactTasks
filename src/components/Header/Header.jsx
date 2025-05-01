import { Link } from "react-router";
import "./Header.css";

function Header({ name }) {

  return (
    <header>
      <div className='Logo'>
        <h1>{name}</h1>
      </div>
      <nav>
        <ul><li>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/books'>Books</Link>
          <Link to='/add'>Add</Link></li>
         
          {/*<li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Skills</li>*/}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
