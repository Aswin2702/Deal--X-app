import "./App.css";
import Navbar from "./Navbar";
import Contentbar from "./contentbar";

function App() {
  return (
    <div className='App font-fontmain'>
      <div className='nav'>
        <Navbar />
      </div>

      <Contentbar />
    </div>
  );
}

export default App;
