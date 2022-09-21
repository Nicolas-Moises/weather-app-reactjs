import React, { useState } from 'react';
import Card from './components/Card';
import initialData from './helpers/initialData';
import fetchData from './services/api';

function App() {

  const [city, setCity] = useState('');
  const [data, setData] = useState(initialData)

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData(city).then((response) => {
      setData(response)
    });

  }
  return (
    <div className="flex flex-col w-full h-screen items-center justify-center">
      <h1 className="text-xl text-slate-600 font-medium mb-3">Type your city</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Cidade" className="p-3 rounded-lg outline-none" value={city} onChange={({ target: { value } }) => setCity(value)} />
        <button type="submit" className="bg-blue-600 p-3 rounded-lg ml-3 text-white font-bold hover:bg-blue-400">Search</button>
      </form>
      
        <Card data={data}/>

    </div>
  );
}

export default App;
