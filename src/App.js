import { Content } from "./components/layout/Contents";
import { Header } from "./components/layout/Header";
import "./App.scss"; // using node-sass

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
    </div>
  );
}

export default App;
