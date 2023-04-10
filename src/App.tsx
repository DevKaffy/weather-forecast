import './App.css'

function App() {
  const url = "https://api.openweathermap.org/data/2.5/weather?q=nigeria&appid=8ef61f42b5a51741d9850cc772f4beee";
  return (
    <div className="app">
      <div className="container">
        <div className="top">
          <div className="location">
            <p>Nigeria</p>
          </div>
          <div className="temp">
            <h1>
              60<sup>o</sup>F
            </h1>
          </div>
          <div className="description">
            <p>Clouds</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p className='bold'>
              65<sup>o</sup>F
            </p>
            <p>Feels like</p>
          </div>
          <div className="humidity">
            <p className='bold'>20%</p>
            <p>Humidity</p>
          </div>
          <div className="wind">
            <p className='bold'> 12 MPH</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
