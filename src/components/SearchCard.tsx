export function SearchCard(){
    return (
        <div className=" inset-0 bg-white/20 border-2 border-white/40 m-auto rounded-md flex justify-center">
            <div className="bg-c w-100 m-auto h-50 ">
                <div className=" flex font-bold   justify-center">
                    <div className='mx-2 cursor-pointer'>Buy</div>
                    <div className='mx-2'>Rent</div>
                    <div className='mx-2'>Sold</div>
                </div>
           
                

                <div className=" my-10 ">

                    <div className="text-neutral-200 text-[5px] flex justify-center">
                        search properties to buy
                    </div>
                    <div className="flex justify-center">
                        <div className=" rounded-sm flex  justify-center items-center bg-white/60 w-50 h-10">
                        Search 

                        </div>
                    </div>
                </div>

                

            </div>

        </div>

        
    )
}