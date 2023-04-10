import './App.css'

function App() {
  const url = "https://api.openweathermap.org/data/2.5/weather?q=nigeria&appid=8ef61f42b5a51741d9850cc772f4beee";
  return (
    <div className="app">
      <div className='container'>
        <div className='top'>
          <div className='location'>
            <p>Nigeria</p>
          </div>
          <div className='temp'>
            <h1>60<sup>o</sup>F</h1>
          </div>
          <div className='description'>
            <p>Clouds</p>
          </div>
        </div>
        <div className='bottom'>
          <div className='feels'>
            <p>65<sup>o</sup>F</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
