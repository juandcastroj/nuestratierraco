import preciousMachines from "../../assets/images/home/preciousMachines.png";

export default function PreciousPlasticBanner () {
  
  return (
    <div className="relative isolate overflow-hidden w-full h-[400px] bg-cover bg-center" 
        style={{ backgroundImage: `url(${preciousMachines})` }}>

            <div className="absolute inset-0 bg-[#033649] bg-opacity-90"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
        <div className="mx-auto max-w-2xl py-16 sm:py-32 lg:px-12 text-center text-white">
          <h1 className="text-4xl font-semibold tracking-tight text-pretty sm:text-5xl animate-flip-up">
            Nuestra Tecnología 🛠
          </h1>
          <div className="mt-6 text-xl font-semibold animate-flip-down">
            <span>
            Para la comunidad, la innovación y el desarrollo sostenible.
            </span> 
                <br/>
            <span className="mt-12">
            ¡ Trabajando de la mano de <a href="https://www.preciousplastic.com/" target="_blank" rel="noopener noreferrer" className="font-extrabold text-yellow-300">Precious Plastic</a>  !
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}