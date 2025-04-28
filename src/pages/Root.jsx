import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";



function Root() {
  return (
    <div>
      <Header />
      <h1>I am ROOT</h1>
      <Footer year={2025} />
    </div>
  );
}

export default Root;
