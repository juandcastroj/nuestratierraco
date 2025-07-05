import { HomeIcon } from '@heroicons/react/20/solid'

const user = {
  name: 'Floyd Miles',
  email: 'floyd.miles@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}

const breadcrumbs = [
  { name: 'Projects', href: '#', current: false },
  { name: 'Project Nero', href: '#', current: true },
]

export default function Profile() {
  return (
    <>
{/* 
          <div className="mt-3 px-2">
              {userNavigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-base font-medium text-sky-200 hover:bg-sky-400 hover:text-white"
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div> */}

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="hidden pt-24 border-b border-t border-gray-400 bg-gray-100 lg:flex">
        <ol role="list" className="mx-auto flex w-full max-w-(--breakpoint-xl) space-x-4 px-4 sm:px-6 lg:px-8">
          <li className="flex">
            <div className="flex items-center">
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <HomeIcon aria-hidden="true" className="size-5 shrink-0" />
                <span className="sr-only">Home</span>
              </a>
            </div>
          </li>
          {breadcrumbs.map((item) => (
            <li key={item.name} className="flex">
              <div className="flex items-center">
                <svg
                  fill="currentColor"
                  viewBox="0 0 24 44"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                  className="h-full w-6 shrink-0 text-gray-200"
                >
                  <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
                </svg>
                <a
                  href={item.href}
                  aria-current={item.current ? 'page' : undefined}
                  className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                >
                  {item.name}
                </a>
              </div>
            </li>
          ))}
        </ol>
      </nav>

      <main className="mx-auto max-w-lg px-4 pt-10 pb-12 lg:pb-16">
        <form>
          <div className="space-y-6">
            <div>
              <h1 className="text-lg/6 font-medium text-gray-900">Project Settings</h1>
              <p className="mt-1 text-sm text-gray-500">
                Let’s get started by filling in the information below to create your new project.
              </p>
            </div>

            <div>
              <label htmlFor="tags" className="block text-sm/6 font-medium text-gray-900">
                Tags
              </label>
              <div className="mt-2">
                <input
                  id="tags"
                  name="tags"
                  type="text"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 outline-sky-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="flex justify-end gap-x-3">

              <button
                type="submit"
                className="rounded-md bg-sky-500 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-sky-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
              >
                Canjea tus puntos 
              </button>
              <button
                type="button"
                className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50"
              >
                log out
              </button>
            </div>
          </div>
        </form>
      </main>
    </>
  )
}
