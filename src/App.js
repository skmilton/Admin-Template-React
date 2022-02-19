import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import './app.css'
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="App">
     <Topbar/>
     <div className='container'>
       <Sidebar/>
       {/* <div className='others'>  others Pase</div> */}
       <Home/>
     </div>
    </div>
  );
}

export default App;
