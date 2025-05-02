import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "./pages.css";
import { Outlet } from "react-router";






function Root() {
  return (
    <div className = "window">
     

      <Header name='Beniitta Huttunen'/>
      <main>
      <Outlet />
      {/*<h1>I am ROOT</h1>*/}
     
      </main>
      <Footer year={2025} />
    </div>
  );
}

export default Root;
