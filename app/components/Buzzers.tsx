export default function Buzzers() {

    return (
       
            <div className="flex flex-row space-x-14 ml-4 bottom-0">
                <button
                    className="w-32 h-32 bg-red-600 hover:bg-red-500 active:scale-95
             text-white font-bold rounded-full text-4xl
             shadow-[0_8px_0_#7f1d1d] active:shadow-[0_2px_0_#7f1d1d]
             transition-all duration-150 flex items-center justify-center"
                >
                    SCAM
                </button>
                <button
                    className="w-32 h-32 bg-green-500 hover:bg-green-400 active:scale-95
             text-white font-bold rounded-full text-4xl
             shadow-[0_8px_0_#14532d] active:shadow-[0_2px_0_#14532d]
             transition-all duration-150
             flex items-center justify-center"
                >
                    SAFE
                </button>
            </div>

     
    )
}