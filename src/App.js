import React, { useState } from "react";

function App() {
  const [data, setData] = useState([]);

  const submitHandler = event => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);    
    
    fetch(`https://api.tvmaze.com/search/shows?q=${data.tracking}`)

    .then(response => response.json())

    .then(console.log)

  };
  return (
    
    <div className="container">
      <h1>Consultar Filmes</h1>
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <input type="text" className="form-control" name="tracking" placeholder="nome do filme"/>
        </div>
        <button type="submit" className="btn btn-primary">
          Buscar
        </button>
      </form>

      { setData }

    </div>
  );
}

export default App;
