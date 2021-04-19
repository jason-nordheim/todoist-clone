import { Content } from "./components/layout/Contents";
import { Header } from "./components/layout/Header";
import "./App.scss"; // using node-sass
import { ProjectsProvider, SelectedProjectsProvider } from "./context";

function App() {
  return (
    <SelectedProjectsProvider>
      <ProjectsProvider>
        <div className="App">
          <Header />
          <Content />
        </div>
      </ProjectsProvider>
    </SelectedProjectsProvider>
  );
}

export default App;
