import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "./pages.css";






function Root() {
  return (
    <div className = "window">
     

      <Header />
      <main>
      <Outlet />
      <h1>I am ROOT</h1>
      <Footer year={2025} />
      </main>
    </div>
  );
}

export default Root;
