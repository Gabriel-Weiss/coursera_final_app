import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <section
      style={{
        paddingInline: "500px",
        paddingBlock: "0",
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: "100%",
        gridTemplateRows: "120px 1fr 80px"
      }}
    >
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </section>
  );
}

export default App;
