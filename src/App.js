import { useRef, useState } from 'react';
import './App.css';
import ImageGellery from './ImageGellery';

function App() {
  const [fetchData, setFetchData] = useState([]);
  const ref = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(ref.current.value);

    // API URL
    const endpointURL = `https://pixabay.com/api/?key=28042362-a1a39dd60a00423fe2a3ab056&q=${ref.current.value}&image_type=photo`

    // fetch data
    fetch(endpointURL)
      .then((res) => {
        return res.json();
      })
      .then((data)=> {
        console.log(data.hits);
        setFetchData(data.hits);
      });


  };

  return (
    <div className="container">
      <h2> My Pixabay</h2>
      <form onSubmit={(e)=> handleSubmit(e)}>
        <input type='text' placeholder="search pictures" ref={ref}/>
      </form>
      <ImageGellery fetchData={fetchData}/>
    </div>
  );
}

export default App;
