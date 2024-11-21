import "./App.css";

import {
  About,
  Contact,
  Experience,
  Footer,
  Hero,
  Navbar,
  Portfolio,
} from "./components";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
