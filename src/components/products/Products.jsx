import { Link } from 'react-router-dom'
import products from '../../constants/products'

export default function Products() {
  return (
    <div className="bg-white">
      <div className="py-16 sm:py-24 lg:mx-auto lg:max-w-7xl lg:px-8">
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-0 text-blueText hover:text-blue-700 animate-fade-down animate-duration-[2000ms] animate-delay-[300ms]">
          <h2 className="text-2xl font-bold">Productos destacados</h2>
          <Link to="https://co.mitienda.la/nuestratierra" className="hidden text-lg font-semibold sm:block">
            Ver todos
            <span aria-hidden="true"> &rarr;</span>
          </Link>
        </div>

        <div className="relative mt-8 animate-fade-down animate-duration-[2500ms] animate-delay-[250ms]">
          <div className="relative -mb-6 w-full overflow-x-auto pb-6">
            <ul
              role="list"
              className="mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:grid lg:grid-cols-4 lg:gap-x-8 lg:space-x-0"
            >
              {products.map((product) => (
                <li key={product.id} className="inline-flex w-64 flex-col text-center lg:w-auto mt-6">
                  <div className="group relative">
                    <img
                      alt={product.imageAlt}
                      src={product.imageSrc}
                      className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75"
                    />
                    <div className="mt-6">
                      <p className="text-sm text-gray-500">{product.color}</p>
                      <h3 className="mt-1 font-semibold text-gray-900">
                        <a href={product.href}>
                          <span className="absolute inset-0" />
                          {product.name}
                        </a>
                      </h3>
                      <p className="mt-1 text-gray-900">{product.price}</p>
                    </div>
                  </div>

                  <h4 className="sr-only">Available colors</h4>
                  <ul role="list" className="mt-auto flex items-center justify-center space-x-3 pt-6">
                    {product.availableColors.map((color) => (
                      <li
                        key={color.name}
                        style={{ backgroundColor: color.colorBg }}
                        className="size-4 rounded-full border border-black/10"
                      >
                        <span className="sr-only">{color.name}</span>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex px-4 sm:hidden">
          <a href="#" className="text-sm font-semibold text-indigo-600 hover:text-indigo-500">
            Ver todos
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
    </div>
  )
}
