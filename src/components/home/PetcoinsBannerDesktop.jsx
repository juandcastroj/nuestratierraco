// import { XMarkIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'

export default function PetcoinsBannerDesktop() {
  return (
    <>
      <div className="hidden sm:flex sticky bottom-0 start-0 z-30 isolate 
        items-center justify-center gap-x-6 overflow-hidden bg-blueText 
        px-6 sm:px-5 py-4 sm:py-2 sm:before:flex-1 border-t border-gray-600 
        transition-all duration-500 ease-in-out max-h-40 animate-flip-up">

        <div className="flex w-full flex-wrap justify-center items-center gap-x-4 gap-y-2">
          <p className="text-base text-[#9fffcb] font-semibold text-center">
            <strong>PetCoins 🪙</strong>
            <svg viewBox="0 0 2 2" aria-hidden="true" className="mx-2 inline size-0.5 fill-current">
              <circle r={1} cx={1} cy={1} />
            </svg>
            ¡Usalos para canjear tu reciclaje por nuestros productos!
          </p>

          <Link
            to="/petcoins"
            className="hidden sm:flex flex-none rounded-full bg-[#25a18e] hover:bg-[#20ad98] 
            px-3.5 py-1 text-base font-semibold text-white shadow-xs focus-visible:outline-2 
            focus-visible:outline-offset-2 focus-visible:outline-gray-900"
          >
            Conoce más <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>


        {/* <div className="hidden sm:flex flex-1 justify-end">
          <button type="button" 
              onClick={() => {
                const banner = document.querySelector('#PetcoinsBanner');
                if (banner) {
                  banner.classList.add('max-h-0', 'opacity-0');
                  setTimeout(() => {
                    banner.classList.add('hidden');
                  }, 500); 
                }
              }}

            className="-m-3 p-3 focus-visible:-outline-offset-4">
            <span className="sr-only">Dismiss</span>
            <XMarkIcon aria-hidden="true" className="size-5 text-white"/>
          </button>
        </div> */}

      </div>
    </>
  )
}
