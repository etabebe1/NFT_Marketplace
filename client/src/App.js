import "./App.css";
import { Navbar, Footer } from "./components/z-index.component";
import { Home } from "./pages/z-index.page";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      {/* components here  */}
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
