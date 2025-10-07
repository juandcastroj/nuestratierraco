import { InformationCircleIcon } from '@heroicons/react/20/solid'
// import banner from "../../assets/images/projects/image2.png";
import image1 from "../../assets/images/home/Historia.jpeg";

export default function MainInfo() {
  return (
    <div className="px-6 py-8 lg:px-8 bg-gradient-to-b from-[#60cee5] to-[#affff4]">
      <div className="mx-auto max-w-3xl text-base/7 text-gray-700">

        <div className="mt-10">

          <figure className="mt-10 border-l-2 border-blueText pl-9 transition animate-fade-right animate-duration-[2500ms] animate-delay-[1000ms]">
            <blockquote className="font-semibold text-gray-900">
              <p>
                “¡Bienvenidos a un mundo donde la creatividad, la conciencia y el cambio se entrelazan para dar forma al mañana! En Nuestra Tierra, la innovación es nuestra brújula y el desarrollo sostenible es nuestro horizonte.”
              </p>
            </blockquote>

            {/* <figcaption className="mt-6 flex gap-x-4">
              <img
                alt=""
                src={testimonialImg}
                className="size-6 flex-none rounded-full bg-gray-50"
              />
              <div className="text-sm/6">
                <strong className="font-semibold text-gray-900">NuestraTierraco</strong>
              </div>
            </figcaption> */}
          </figure>

          <figure className="mt-16 flex flex-col">
              <img
                  alt=""
                  src={image1}
                  className="aspect-video rounded-xl bg-gray-50 object-cover"
              />
              <figcaption className="mt-4 flex gap-x-2 text-sm/6 text-blueText">
                  <InformationCircleIcon aria-hidden="true" className="mt-0.5 size-5 flex-none text-blueText"/>
                  Nuestros inicios en la recolección de materiales.
              </figcaption>
          </figure>
        </div>
  
      </div>
    </div>
  )
}
