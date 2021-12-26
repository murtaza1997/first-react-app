import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
import { useState } from "react/cjs/react.development";

function App() {
  const [darkMode, setDarkMode] = useState('light')
  const toggleMode=()=>{
    if(darkMode==='light')
    {
      setDarkMode('dark');
      document.body.style.backgroundColor='rgb(7 62 116 / 94%)';
    }
    else{
      setDarkMode('light')
      document.body.style.backgroundColor='white';
    }
  };
  const [alert, setAlert] = useState(null)
  const showAlert=(message,type)=>{
    setAlert({
      message:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500)
    
  }
  return (
    <>
      <Navbar title="Murtaza" mode={darkMode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container"> 
        <TextForm heading="Welcome to TextUtils" mode={darkMode} showAlert={showAlert}/>
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
