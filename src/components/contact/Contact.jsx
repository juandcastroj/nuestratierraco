import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { Form } from './Form'

export default function Contact() {

  return (
    <div className="relative isolate min-h-screen bg-gradient-to-b from-[#9effca] to-[#60cee5]">
      <div className="mx-auto grid max-w-5xl grid-cols-1 lg:grid-cols-2 lg:pt-12">

        <div className="relative px-6 lg:static lg:px-8 py-16 lg:py-28">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg animate-fade-right">
            <h2 className="text-4xl font-semibold tracking-tight text-[#033649] sm:text-5xl">
              Contáctanos
            </h2>

            <p className="mt-6 text-lg/8 text-[#004e64]">
              Con tu compra, apoyas el cuidado del planeta y ayudas a crear más iniciativas en beneficio de las comunidades.  <br/>
              ¡Escríbenos para fabricar tu producto o crear nuevas ideas!</p>
            <dl className="mt-10 space-y-4 text-base/7 text-gray-600">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <BuildingOffice2Icon aria-hidden="true" className="h-7 w-6 text-[#033649]" />
                </dt>
                <dd className='text-[#033649]'>
                  Ciudad Bolivar, Bogotá D.C, Colombia.
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <PhoneIcon aria-hidden="true" className="h-7 w-6 text-[#033649]" />
                </dt>
                <dd>
                  <a href="tel:+57 319 641 03 97" className="text-[#033649]">
                    +57 319 641 03 97
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <EnvelopeIcon aria-hidden="true" className="h-7 w-6 text-[#033649]" />
                </dt>
                <dd>
                  <a href="mailto:nuestratierracorporación@gmail.com" className="text-[#033649]">
                      nuestratierracorporación@gmail.com                  
                    </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <Form/>
      </div>
    </div>
  )
}
