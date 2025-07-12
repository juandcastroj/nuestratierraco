import { XMarkIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'

export default function PetCoinsBanner() {
  return (
    <>
      <div id="PetcoinsBanner" className="sticky bottom-0 start-0 z-30 isolate flex items-center gap-x-6 overflow-hidden bg-[#25a18e] px-6 py-3 sm:px-5 sm:before:flex-1  transition-all duration-500 ease-in-out max-h-40 animate-flip-up">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <p className="text-base text-white font-semibold">
            <strong>PetCoins 🪙</strong>
            <svg viewBox="0 0 2 2" aria-hidden="true" className="mx-2 inline size-0.5 fill-current">
              <circle r={1} cx={1} cy={1} />
            </svg>
            ¡Usalos para canjear tu reciclaje por nuestros productos!
          </p>
          <Link
            to="/petcoins"
            className="flex-none rounded-full bg-[#004e64] hover:bg-[#244d58] px-3.5 py-1 text-base font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
          >
                Conoce mas <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>

        <div className="flex flex-1 justify-end">
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
        </div>

      </div>
    </>
  )
}
