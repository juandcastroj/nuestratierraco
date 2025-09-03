import { HomeIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'
import LogoutButton from './LogoutButton'

const breadcrumbs = [
  { name: 'Cuenta', href: '#', current: false },
  { name: 'Tus PetCoins', href: '#', current: true },
]

export default function Breadcrumbs() {
    return (
        <>
            <nav aria-label="Breadcrumb" className="flex justify-between mt-20 border-b border-t border-gray-300">
                <ol
                    role="list"
                    className="mx-auto flex w-full max-w-(--breakpoint-xl) justify-between px-4 sm:px-6 lg:px-8 fixed top-[78px] z-50 bg-gray-50"
                    >
                    {/* Items a la izquierda */}
                    <div className="flex space-x-4">
                        <li className="flex">
                        <div className="flex items-center">
                            <Link to="/" className="text-gray-400 hover:text-gray-500">
                            <HomeIcon aria-hidden="true" className="size-5 shrink-0" />
                            <span className="sr-only">Home</span>
                            </Link>
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
                                aria-current={item.current ? "page" : undefined}
                                className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                            >
                                {item.name}
                            </a>
                            </div>
                        </li>
                        ))}
                    </div>

                    {/* Botón a la derecha */}
                    <div className="flex items-center">
                        <li className="flex">
                        <LogoutButton />
                        </li>
                    </div>
                </ol>
            </nav>
        </>
    )
}