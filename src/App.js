import logo from './logo.svg';
import './App.css';
import BasicTableComponent from './components/basic.table';
import FilterTableComponent from './components/filter.table';
import PageTableComponent from './components/page.table';
import Header from './components/Header/Header'
import Nav from './components/nav'
import TopNav from './components/top_nav'

function App() {
  return (
    <div className="App">

      <TopNav />
      <Nav />
      <Header />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <FilterTableComponent />
    </div>
    
  );
}

export default App;
