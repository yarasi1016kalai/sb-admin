
import './App.css';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';

function App() {
  let data ={
    earningMonthly: "40,000",
    earningYearly:"215,000",
    task:"50%",
    pendingRequest:"18"
  }
  return <div id="wrapper">
   <Sidebar />
   <Dashboard  data={data}/>
  
    

  </div>
}

export default App;
