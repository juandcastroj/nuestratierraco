import { InformationCircleIcon } from '@heroicons/react/20/solid'
import banner from "../../assets/images/projects/image2.png";

export default function MainInfo() {
  return (
    <div className="px-6 py-8 lg:px-8 bg-gradient-to-b from-[#60cee5] to-[#affff4]">
      <div className="mx-auto max-w-3xl text-base/7 text-gray-700">

        <div className="mt-10">
          <figure className="mt-10 border-l border-blueText pl-9">
            <blockquote className="font-semibold text-gray-900">
              <p>
                “¡Bienvenidos a un mundo donde la creatividad, la conciencia y el cambio se entrelazan para dar forma al mañana! En Nuestra Tierra, la innovación es nuestra brújula y el desarrollo sostenible es nuestro horizonte.”
              </p>
            </blockquote>

            <figcaption className="mt-6 flex gap-x-4">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                className="size-6 flex-none rounded-full bg-gray-50"
              />
              <div className="text-sm/6">
                <strong className="font-semibold text-gray-900">NuestraTierraco</strong> – Cofounder
              </div>
            </figcaption>

          </figure>
          <p className="mt-10">
            Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae
            sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.
          </p>
        </div>


        <figure className="mt-16 flex flex-col">
          <img
            alt=""
            src={banner}
            className="aspect-video rounded-xl bg-gray-50 object-cover"
          />
          <figcaption className="mt-4 flex gap-x-2 text-sm/6 text-gray-500">
            <InformationCircleIcon aria-hidden="true" className="mt-0.5 size-5 flex-none text-gray-300" />
            Faucibus commodo massa rhoncus, volutpat.
          </figcaption>
        </figure>
  
      </div>
    </div>
  )
}
