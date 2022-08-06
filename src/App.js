import "./App.css";
import About from "./components/About";
import NavigationBar from "./components/navigation_bar/NavigationBar";
import Resume from "./components/Resume";
import Services from "./components/Services";

function App() {
  return (
    <>
      <NavigationBar />
      <About />
      <Resume />
      <Services />
    </>
  );
}

export default App;
