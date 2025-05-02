import { NavLink, Link } from "react-router";
import "./Header.css";

function Header({ name }) {

  return (
    <header>
      <div className='Logo'>
        <Link to="/">
        <h1>{name}</h1></Link>
      </div>
      <nav>
        <ul><li>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/books'>Books</NavLink>
          <NavLink to='/add'>Add</NavLink></li>
         
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
