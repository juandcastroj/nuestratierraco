import { featuredTestimonial, testimonials } from "../../constants/testimonials"

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Testimonials() {
  return (
    <div className="relative isolate pb-28 pt-24 sm:pt-32  min-h-screen bg-gradient-to-b from-[#9effca] to-[#60cee5] bg-fixed">
  
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          {/* <h2 className="text-base/7 font-semibold text-[#004e64]">Testimonios</h2> */}
          <p className="mt-2 text-balance text-4xl font-semibold tracking-tight text-[#004e64] sm:text-5xl">
            Mujeres NuestraTierra
          </p>

          <p className="mt-6 text-lg leading-2 text-[#004e64]">
            La iniciativa &quot;Mujeres Nuestra
            Tierra&quot; es un testimonio de nuestro
            compromiso con la equidad de
            género y la inclusión. Trabajamos
            para empoderar a las mujeres y
            promover la igualdad de
            oportunidades en todos los
            aspectos de la sociedad.
            </p>
        </div>
        <div className="mx-auto animate-fade-up mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm/6 text-[#004e64] sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
          
          <figure className="rounded-2xl bg-white shadow-lg transition transform duration-300 hover:-translate-y-2 ring-1 ring-[#004e64]/5 sm:col-span-2 xl:col-start-2 xl:row-end-1">
            <blockquote className="p-6 text-lg font-semibold tracking-tight text-[#004e64] sm:p-8 sm:text-xl/8">
              <p>{`“${featuredTestimonial.body}”`}</p>
            </blockquote>
            <figcaption className="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-[#004e64]/10 px-6 py-4 sm:flex-nowrap">
              <img
                alt=""
                src={featuredTestimonial.author.imageUrl}
                className="size-14 flex-none rounded-full bg-gray-50"
              />
              <div className="flex-auto">
                <div className="font-semibold">{featuredTestimonial.author.name}</div>
                <div className="text-gray-600">{`@${featuredTestimonial.author.handle}`}</div>
              </div>
              <img alt="" src={featuredTestimonial.author.logoUrl} className="h-10 w-auto flex-none" />
            </figcaption>
          </figure>

          {testimonials.map((columnGroup, columnGroupIdx) => (
            <div key={columnGroupIdx} className="space-y-8 xl:contents xl:space-y-0">
              {columnGroup.map((column, columnIdx) => (
                <div
                  key={columnIdx}
                  className={classNames(
                    (columnGroupIdx === 0 && columnIdx === 0) ||
                      (columnGroupIdx === testimonials.length - 1 && columnIdx === columnGroup.length - 1)
                      ? 'xl:row-span-2'
                      : 'xl:row-start-1',
                    'space-y-8',
                  )}
                >
                  {column.map((testimonial) => (
                    <figure
                      key={testimonial.author.handle}
                      className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-[#004e64]/5 transition transform duration-300 hover:-translate-y-2"
                    >
                      <blockquote className="text-[#004e64] font-semibold">
                        <p>{`“${testimonial.body}”`}</p>
                      </blockquote>
                      <figcaption className="mt-6 flex items-center gap-x-4">
                        <img alt="" src={testimonial.author.imageUrl} className="size-14 rounded-full bg-gray-50" />
                        <div>
                          <div className="font-semibold">{testimonial.author.name}</div>
                          <div className="text-gray-600">{`@${testimonial.author.handle}`}</div>
                        </div>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              ))}
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}
