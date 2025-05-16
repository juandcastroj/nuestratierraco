import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { Form } from './testimonials'

export default function Contact() {

  return (
    <div className="relative isolate">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2 lg:pt-12">

        <div className="relative px-6 lg:static lg:px-8 py-16 lg:py-28">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg font-mono animate-fade-right">
            <h2 className="text-4xl font-semibold tracking-tight text-green-900 dark:text-gray-200 sm:text-5xl">
              Get in touch
            </h2>

            <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-200">
            I'd love to work together on anything related to my current tech stack—or dive into something new and exciting!
            </p>
            <dl className="mt-10 space-y-4 text-base/7 text-gray-600">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <BuildingOffice2Icon aria-hidden="true" className="h-7 w-6 text-gray-400" />
                </dt>
                <dd className='dark:text-gray-200'>
                  Bogotá D.C, Colombia
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <PhoneIcon aria-hidden="true" className="h-7 w-6 text-gray-400" />
                </dt>
                <dd>
                  <a href="tel:+57 320 484 6725" className="hover:text-gray-900 dark:text-gray-200">
                    +57 320 484 6725
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <EnvelopeIcon aria-hidden="true" className="h-7 w-6 text-gray-400" />
                </dt>
                <dd>
                  <a href="mailto:juandavid4130@gmail.com" className="hover:text-gray-900 dark:text-gray-200">
                    juandavid4130@gmail.com
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
