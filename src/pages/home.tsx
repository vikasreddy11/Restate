import hyd2 from "../assets/hyd2.jpeg"

export function Home () {
    return (
        <div>
          <div className='bg-cya-400 h-20 flex justify-between items-center p-8 text-'>
            <div className='text-4xl text-black mx-40 '>Restate</div>
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
          <div className="flex ">
            <div className='h-20 mx-10 w-120 rounded-3xl bg-neutral-200 text-2xl flex  flex-col items-center'>Looking to sell? Find a trusted expert.
              <div className="text-lg">
                Enter your address to review and compare agents
              </div> 
            </div>
          </div>
        </div>
    )
}