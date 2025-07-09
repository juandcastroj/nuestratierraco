import { HomeIcon } from '@heroicons/react/20/solid'

const breadcrumbs = [
  { name: 'Mi Cuenta', href: '#', current: false },
  { name: 'PetCoins', href: '#', current: true },
]

export default function Breadcrumbs() {
    return (
        <>
            <nav aria-label="Breadcrumb" className="hidden mt-20 border-b border-t border-gray-200 bg-white sm:flex">
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
        </>
    )
}