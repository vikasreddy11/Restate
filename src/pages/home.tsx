import hyd2 from "../assets/hyd2.jpeg"
import { Button } from "../components/Button"
import { Footer } from "./Footer"

export function Home () {
    return (
        <div className="min-h-screen flex flex-col">
          <div className='sticky top-0 z-50 bg-white shadow h-20 flex justify-between items-center border-1 absolute p-8'>
            <div className='text-4xl text-black  '>Restate</div>
            <div className=' flex '>
              <div className='text-xl m-2'>Buy</div>
              <div className='text-xl m-2'>House prices</div>
              <div className='text-xl m-2'>Rent</div>
              <div className='text-xl m-2'>Find Agent</div>
              <div className='text-xl m-2'>Mortage</div>
              <div className='text-xl m-2 text-black'>Login/Sign-in</div>
            </div>
          </div >

          <div className='flex justify-center '>
            <img src={hyd2}
            className='rounded-4xl m-5  shadow-lg' />
          </div>

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
          <div className="relative fixed left-10 mt-16">
            <div className='h-40 m-2 w-120 rounded-3xl bg-neutral-200 text-2xl flex flex-col items-center justify-center relative'>
              <div className="absolute top-3">Looking to sell? Find a trusted expert.</div>
              <div className="text-lg absolute m-1 top-10">
                Enter your address to review and compare agents
              </div>
              <div className="flex justify-center absolute bottom-5"><Button/></div>
            </div>
          </div>
          <div><Footer/></div>
        </div>
    )
}