
import './App.css';
import Container from './componets/Container.js';
import Header from './componets/Header.js'
import SidebarLeft from './componets/SidebarLeft.js';
import SidebarRright from './componets/SidebarRright.js';
function App() {
  return (
    <div className="app">
      <Header />
      <SidebarLeft />
      <Container />
      
      <SidebarRright />
      
    </div>
  );
}

export default App;
