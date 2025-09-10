import preciousMachines from "../../assets/images/home/preciousMachines.png";

export default function PreciousPlasticBanner () {
  
  return (
    <div className="relative isolate overflow-hidden w-full h-[300px] bg-cover bg-center" 
        style={{ backgroundImage: `url(${preciousMachines})` }}>

            <div className="absolute inset-0 bg-[#023246] bg-opacity-90"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
        <div className="mx-auto max-w-2xl py-12 sm:py-20 lg:px-12 text-center text-white hover:animate-shake animate-duration-[3000ms] animate-delay-[200ms]">
          <h1 className="text-4xl font-semibold tracking-tight text-pretty sm:text-5xl animate-flip-up">
            Nuestra Tecnología 🛠
          </h1>
          <div className="mt-6 text-xl font-semibold animate-flip-down">
            <span>
            Para la comunidad, la innovación y el desarrollo sostenible.
            </span> 
                <br/>
            <span className="mt-12">
            ¡ Trabajando de la mano de <a href="https://www.preciousplastic.com/" target="_blank" rel="noopener noreferrer" className="text-2xl font-extrabold text-[#9fffcb] underline">Precious Plastic</a>  !
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}