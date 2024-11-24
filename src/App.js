
import "./App.css";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/header/Header";
import { Project } from "./components/Project/Project";
import { SkillContainer } from "./components/SkillContainer/SkillContainer";
import { Timeline } from "./components/Timeline/Timeline";
import { Topcontainer } from "./components/Topcontainer/Topcontainer";

function App() {
  return (
    <div className="App">
      <Header />
      <Topcontainer />
      <SkillContainer />
      <Project />
      <Timeline/>
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
