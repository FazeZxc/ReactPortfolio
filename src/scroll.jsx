
function Navbar() {
    return (
        <div className='flex justify-between w-full p-10'>
            <div className='flex'>
                <div className='flex text-xl text-white'>©</div>
                <div className='text-2xl font-NeueMontreal-Regular text-white'>Code by Dennis</div>
            </div>
            <div className='flex'>
                <div className="flex-col">
                    <div className='hover:block text-2xl font-NeueMontreal-Regular mr-20 text-white '>
                        Work
                    </div>
                    <div className='w-2 ml-6 mt-3 h-2 rounded-xl bg-white hover:scale-1 scale-0'></div>
                </div>
                <div className="flex-col">
                    <div className='hover:block text-2xl font-NeueMontreal-Regular mr-20 text-white '>
                        About
                    </div>
                    <div className='w-2 ml-6 mt-3 h-2 rounded-xl bg-white'></div>
                </div>
                <div className="flex-col">
                    <div className='hover:block text-2xl font-NeueMontreal-Regular mr-20 text-white '>
                        Contact
                    </div>
                    <div className='w-2 ml-6 mt-3 h-2 rounded-xl bg-white'></div>
                </div>
            </div>
        </div>
    )
}

function SideSq() {
    return (
        <div className="fixed left-0 top-1/2 w-64 h-24 rounded-r-full bg-hero-black flex justify-between">
            <div className="text-white p-3 ml-5 text-left font-NeueMontreal-Regular w-24">Located in the Netherlands</div>
            <div className="h-20 mt-2 mr-3 w-20 rounded-full bg-hero-ground">
            </div>
        </div>
    )
}



export {
    Navbar,
    SideSq
}