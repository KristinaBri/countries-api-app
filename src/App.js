
import './App.css';
import Title from './components/Title';
import Countries from './components/Countries';
import Pagination from './components/Pagination';


const App = () => {
  return (
    <div className="App">
      <Title />
      <Countries />
      {/* <Pagination countriesPerPage={countriesPerPage} totalCountries={countries.length} /> */}
    </div>
  );
}

export default App;
