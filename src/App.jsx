import { BrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./router";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <section className="container">
      <section className="row">
        <section className="col">
          <Header />
          <BrowserRouter>
            <Main />
          </BrowserRouter>
          <Footer />
        </section>
      </section>
    </section>
  );
}

export default App;
