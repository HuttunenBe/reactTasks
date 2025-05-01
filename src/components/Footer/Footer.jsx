
import './Footer.css';


function Footer( {year} ) {
console.log('This is footer props',year)
  return (
    <footer>
      <h1>Beniitta Huttunen</h1>
      <nav>
        <ul>
          {/*<li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Skills</li>*/}
        </ul>
      </nav> 
      <h3>Copyright {year}</h3>
    </footer>
  );
}

export default Footer;
