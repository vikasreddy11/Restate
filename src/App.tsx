import './App.css'
import { Home } from './pages/home'
import hyd2 from "./assets/hyd2.jpeg"


function App() {

  return (
    <div className=''>
      <Home/>
      <div className='flex justify-evenly flex-wrap p-20'>
        <div>
          <img src={hyd2}
            className='rounded-4xl m-5 h-75 w-130 shadow-lg' />
            <div className='text-xl mx-7'>Free home valuation</div>
            <div>Find out how much it costs</div>
        </div>
        <div>
          <img src={hyd2}
            className='rounded-4xl m-5 h-75 w-130 shadow-lg' />
            <div className='text-xl mx-7'>Free home valuation</div>
            <div>Find out how much it costs</div>
        </div>
        <div>
          <img src={hyd2}
            className='rounded-4xl m-5 h-75 w-130 shadow-lg' />
            <div className='text-xl mx-7'>Free home valuation</div>
            <div>Find out how much it costs</div>
        </div>
      </div>
      <div className='h-20 w-80 bg-neutral-200'>hi</div>
   </div>
  )
}

export default App
