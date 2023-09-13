import { useState  } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  // const [count, setCount] = useState(0)
  const callAPIGET = async ()=>{
    try {
      const data = await axios.get('http://localhost:8000/',{
        withCredentials:true
      });
      window.alert(data.data.status);
    } catch (error) {
      console.log(error);
      window.alert(error);
    }
  }
  const callAPIPOST = async (e)=>{
    e.preventDefault();
    try {
      const data = await axios.post('http://localhost:8000/',{'data':'store cookie in browser with POST req'},{
        withCredentials:true
      });
      window.alert(data.data.status);
    } catch (error) {
      console.log(error);
      window.alert(error);
    }
  }

  return (
    <>
      
      <h1>Call API And Check Cookie</h1>
      <div className="card">
        <button onClick={callAPIGET}>
          Call Api With GET req
        </button>
        <form onSubmit={callAPIPOST}>
        <input type="submit" value={"Call Api With POST req"} />
        </form>
      </div>
    </>
  )
}

export default App
