import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";

export default function Map() {
    return (
    <div className="bg-gradient-to-t from-[#9effca] to-[#60cee5] py-8 sm:py-12">
      <div className="mx-auto grid max-w-5xl grid-cols-1 lg:grid-cols-2 gap-9 lg:py-12">

            <div className="flex justify-center">
                <iframe className="h-[12rem] sm:h-[20rem] w-96 sm:w-[44rem] animate-fade-down animate-duration-[2500ms] animate-delay-[500ms] rounded-xl" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3977.039278757389!2d-74.17086522589385!3d4.5869731426347835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9f636a3c355b%3A0x7947f055e40ee9cd!2sCorporaci%C3%B3n%20NuestraTierra!5e0!3m2!1ses!2sco!4v1754932394108!5m2!1ses!2sco" 
                     allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <div className="relative px-6 lg:static lg:px-8 py-12 sm:py-8 lg:py-0">
                <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg animate-fade-right">
                    <h2 className="text-4xl font-semibold tracking-tight text-[#033649] sm:text-5xl">
                    Visítanos
                    </h2>

                    <p className="mt-6 text-base text-[#004e64]">
                    Conoce nuestras instalaciones y cómo ayudamos a crear más iniciativas en beneficio de las comunidades.  <br/>
                    ¡Escríbenos para programar tu visita! </p>
                    <dl className="mt-10 space-y-4 text-base/7 text-gray-600">

                    <div className="flex gap-x-4">
                        <dt className="flex-none">
                        <span className="sr-only">Telephone</span>
                        <PhoneIcon aria-hidden="true" className="w-9 sm:w-6 text-[#033649]"/>
                        </dt>
                        <dd>
                        <a href="tel:+57 319 641 03 97" className="text-[#033649] font-semibold">
                            +57 319 641 03 97
                        </a>
                        </dd>
                    </div>

                    <div className="flex gap-x-4">
                        <dt className="flex-none">
                        <span className="sr-only">Email</span>
                        <EnvelopeIcon aria-hidden="true" className="w-9 sm:w-6 text-[#033649]"/>
                        </dt>
                        <dd>
                        <a href="mailto:nuestratierracorporación@gmail.com" className="text-[#033649] font-semibold">
                            nuestratierracorporación@gmail.com                  
                            </a>
                        </dd>
                    </div>

                    <div className="flex gap-x-4">
                        <dt className="flex-none">
                        <span className="sr-only">Address</span>
                        <BuildingOffice2Icon aria-hidden="true" className="w-9 sm:w-6 text-[#033649]"/>
                        </dt>
                        <dd className='text-[#033649] font-semibold'>
                        Ciudad Bolivar, Bogotá D.C, Colombia.
                        </dd>
                    </div>

                    </dl>
                </div>
            </div>


        </div>
    </div>
    )
}