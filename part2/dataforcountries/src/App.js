import { useEffect, useState } from 'react';
import axios from 'axios';
import Choice from './components/Choice';

const App = () => {
  const [country, setCountry] = useState('');
  const [result, setResult] = useState([]);

  // Fetch countries data
  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setResult(response.data);
      });
  }, []);

  // Handle country search input change
  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  return (
    <div>
      <form>
        Find countries: <input value={country} onChange={handleCountryChange} />
      </form>
      <div>
        <Choice result={result} country={country} />
      </div>
    </div>
  );
};

export default App;
