import './App.css';
import About from './components/About';
import './components/Navbar'
import Navbar from './components/Navbar';
import Textform from './components/Textform';


function App() {

  return (
    <> 
    <Navbar headline="Text Utility" myHome="Home" myLink="Link"></Navbar>
    <div className="container my-3">
    {/* <Textform heading="Enter your text here for Processing"></Textform> */}
    <About></About>
    </div>

    </>
    
    
  );
}

export default App;
 