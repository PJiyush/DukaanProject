import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Body from './components/Body';
function App() {
  return (
    <div className='flex w-[1440px] h-[882px] bg-[#fafafa]'>
    <Sidebar/>
    <div className='flex-col'>
    <Header/>
    <Body/>
    </div>
    </div>
  );
}

export default App;
