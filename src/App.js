import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import NavigationBar from "./components/navigation_bar/NavigationBar";
import Resume from "./components/Resume";
import Services from "./components/Services";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <NavigationBar />
      <About />
      <Resume />
      {/* Some error's in Services Component */}
      {/* <Services /> */}
      <Skills />
      {/* Project Section in Developemnt */}
      {/* Project Section */}
      <Contact />
    </>
  );
}

export default App;
