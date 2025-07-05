import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { HomeIcon, MagnifyingGlassIcon, PlusIcon } from '@heroicons/react/20/solid'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const user = {
  name: 'Floyd Miles',
  email: 'floyd.miles@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
  { name: 'Dashboard', href: '#' },
  { name: 'Jobs', href: '#' },
  { name: 'Applicants', href: '#' },
  { name: 'Company', href: '#' },
]
const breadcrumbs = [
  { name: 'Projects', href: '#', current: false },
  { name: 'Project Nero', href: '#', current: true },
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]
const team = [
  {
    name: 'Calvin Hawkins',
    email: 'calvin.hawkins@example.com',
    imageUrl:
      'https://images.unsplash.com/photo-1513910367299-bce8d8a0ebf6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Bessie Richards',
    email: 'bessie.richards@example.com',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Floyd Black',
    email: 'floyd.black@example.com',
    imageUrl:
      'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
]
const settings = [
  { name: 'Public access', description: 'This project would be available to anyone who has the link', selected: true },
  {
    name: 'Private to project members',
    description: 'Only members of this project would be able to access',
    selected: false,
  },
  { name: 'Private to you', description: 'You are the only one able to access this project', selected: false },
]

export default function Profile() {
  return (
    <>
      <Disclosure as="nav" aria-label="Global" className="bg-sky-500">
        <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
          <div className="flex h-16 justify-between">
            <div className="flex items-center px-2 lg:px-0">
              <div className="flex shrink-0 items-center">
                <img
                  alt="Your Company"
                  src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=white"
                  className="h-8 w-auto"
                />
              </div>
              <div className="hidden lg:ml-8 lg:flex lg:space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-sky-400"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="flex flex-1 items-center justify-center px-2 lg:ml-6 lg:justify-end">
              <div className="grid w-full max-w-lg grid-cols-1 lg:max-w-xs">
                <input
                  name="search"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  className="peer col-start-1 row-start-1 block w-full rounded-md bg-sky-400 py-1.5 pr-3 pl-10 text-base text-white outline-hidden placeholder:text-white focus:bg-white focus:text-gray-900 focus:placeholder:text-gray-400 sm:text-sm/6"
                />
                <MagnifyingGlassIcon
                  aria-hidden="true"
                  className="pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center text-white peer-focus:text-gray-400"
                />
              </div>
            </div>
            <div className="flex items-center lg:hidden">
              {/* Mobile menu button */}
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-sky-200 hover:bg-sky-400 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
                <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
              </DisclosureButton>
            </div>
            <div className="hidden lg:ml-4 lg:flex lg:items-center">
              <button
                type="button"
                className="relative shrink-0 rounded-full bg-sky-500 p-1 text-sky-200 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-sky-500 focus:outline-hidden"
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">Notificaitons</span>
                <BellIcon aria-hidden="true" className="size-6" />
              </button>

              {/* Profile dropdown */}
              <Menu as="div" className="relative ml-4 shrink-0">
                <div>
                  <MenuButton className="relative flex rounded-full bg-sky-500 text-sm focus:outline-hidden focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-sky-500">
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    <img alt="" src={user.imageUrl} className="size-8 rounded-full" />
                  </MenuButton>
                </div>
                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                >
                  {userNavigation.map((item) => (
                    <MenuItem key={item.name}>
                      <a
                        href={item.href}
                        className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                      >
                        {item.name}
                      </a>
                    </MenuItem>
                  ))}
                </MenuItems>
              </Menu>
            </div>
          </div>
        </div>

        <DisclosurePanel className="lg:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3">
            {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-sky-400 hover:text-white"
              >
                {item.name}
              </DisclosureButton>
            ))}
          </div>
          <div className="border-t border-sky-500 pt-4 pb-3">
            <div className="flex items-center px-4">
              <div className="shrink-0">
                <img alt="" src={user.imageUrl} className="size-10 rounded-full" />
              </div>
              <div className="ml-3">
                <div className="text-base font-medium text-white">{user.name}</div>
                <div className="text-sm font-medium text-sky-200">{user.email}</div>
              </div>
              <button
                type="button"
                className="relative ml-auto shrink-0 rounded-full bg-sky-500 p-1 text-sky-200 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-sky-500 focus:outline-hidden"
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">View notifications</span>
                <BellIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
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
            </div>
          </div>
        </DisclosurePanel>
      </Disclosure>

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="hidden border-b border-gray-200 bg-white lg:flex">
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
              <label htmlFor="project-name" className="block text-sm/6 font-medium text-gray-900">
                Project Name
              </label>
              <div className="mt-2">
                <input
                  defaultValue="Project Nero"
                  id="project-name"
                  name="project-name"
                  type="text"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-sky-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="description" className="block text-sm/6 font-medium text-gray-900">
                Description
              </label>
              <div className="mt-2">
                <textarea
                  id="description"
                  name="description"
                  rows={3}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-sky-600 sm:text-sm/6"
                  defaultValue={''}
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="space-y-2">
                <label htmlFor="add-team-members" className="block text-sm/6 font-medium text-gray-900">
                  Add Team Members
                </label>
                <p id="add-team-members-helper" className="sr-only">
                  Search by email address
                </p>
                <div className="flex">
                  <div className="grow">
                    <input
                      id="add-team-members"
                      name="add-team-members"
                      type="text"
                      placeholder="Email address"
                      aria-describedby="add-team-members-helper"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-sky-600 sm:text-sm/6"
                    />
                  </div>
                  <span className="ml-3">
                    <button
                      type="button"
                      className="inline-flex items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50"
                    >
                      <PlusIcon aria-hidden="true" className="-ml-0.5 size-5 text-gray-400" />
                      Add
                    </button>
                  </span>
                </div>
              </div>

              <div className="border-b border-gray-200">
                <ul role="list" className="divide-y divide-gray-200">
                  {team.map((person) => (
                    <li key={person.email} className="flex py-4">
                      <img alt="" src={person.imageUrl} className="size-10 rounded-full" />
                      <div className="ml-3 flex flex-col">
                        <span className="text-sm font-medium text-gray-900">{person.name}</span>
                        <span className="text-sm text-gray-500">{person.email}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <fieldset>
              <legend className="block text-sm/6 font-medium text-gray-900">Privacy</legend>
              <div className="mt-2 -space-y-px rounded-md bg-white">
                {settings.map((setting) => (
                  <label
                    key={setting.name}
                    value={setting.name}
                    aria-label={setting.name}
                    aria-description={setting.description}
                    className="group flex cursor-pointer border border-gray-200 p-4 first:rounded-tl-md first:rounded-tr-md last:rounded-br-md last:rounded-bl-md focus:outline-hidden has-checked:relative has-checked:border-sky-200 has-checked:bg-sky-50"
                  >
                    <input
                      defaultValue={setting.name}
                      defaultChecked={setting.selected}
                      name="privacy-setting"
                      type="radio"
                      className="relative mt-0.5 size-4 shrink-0 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-sky-600 checked:bg-sky-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                    />
                    <span className="ml-3 flex flex-col">
                      <span className="block text-sm font-medium text-gray-900 group-has-checked:text-sky-900">
                        {setting.name}
                      </span>
                      <span className="block text-sm text-gray-500 group-has-checked:text-sky-700">
                        {setting.description}
                      </span>
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>

            <div>
              <label htmlFor="tags" className="block text-sm/6 font-medium text-gray-900">
                Tags
              </label>
              <div className="mt-2">
                <input
                  id="tags"
                  name="tags"
                  type="text"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-sky-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="flex justify-end gap-x-3">
              <button
                type="button"
                className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-md bg-sky-500 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-sky-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
              >
                Create this project
              </button>
            </div>
          </div>
        </form>
      </main>
    </>
  )
}
