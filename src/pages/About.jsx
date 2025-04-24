import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function About() {
  return (
    <div>
      <Header />
      <h1>I am About</h1>
      <Booklist />
      <Footer year={2025} />
    </div>
  );
}

export default About;
