import './App.scss'
import bg from './assets/img/bg-1.jpeg'

function App() {
  return (
    <>
      <div className="App">
        <img className='background' src={bg}/>
        <div className='content'>
          <div className='window'></div>
        </div>
      </div>
    </>
  )
}

export default App
