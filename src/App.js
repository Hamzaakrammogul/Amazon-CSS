import './App.css'
import SideBar from './components/SideBar/SideBar';
import MainDashboard from './components/SideBar/MainDashboard/MainDashboard';
function App() {



  return (
    <div className="App">
      <div className='AppGlass'>
        <SideBar />
        <MainDashboard/>
        <div></div>
      </div>
    </div>
  );
}

export default App;
