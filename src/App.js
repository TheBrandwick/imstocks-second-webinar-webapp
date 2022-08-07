import "../src/css/main.scss";
import Footer from "./components/Footer";
import MasterClass from "./components/MasterClass";
import ModuleSection from "./components/Modules-section";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <MasterClass/>
      <ModuleSection />
      <Footer />
    </div>
  );
}

export default App;
