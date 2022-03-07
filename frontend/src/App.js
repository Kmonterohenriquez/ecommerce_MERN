import "./App.sass";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import Header from "./components/Header";
import routes from "./routes";

function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          {routes}
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
