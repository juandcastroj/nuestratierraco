import { Link } from "react-router-dom";
import { navigation } from "../constants/footer";
import { navBarItems } from "../constants/navbar";
import WappFloatButton from "./home/WappFloatButton";

export default function Footer() {
  return (
      <>
        <WappFloatButton />

        <footer className="bg-[#033649]">
          <div className="mx-auto max-w-7xl overflow-hidden px-6 py-12 lg:px-8">
            <nav aria-label="Footer" className="-mb-6 flex flex-wrap justify-center gap-x-12 gap-y-3 text-sm/6">
              { navBarItems.map((item) => (
                <Link key={item.name} to={item.to} className="text-gray-400 hover:text-white">
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="mt-16 flex justify-center gap-x-10">
              { navigation.map((item) => (            
                <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-300" target="_blank">
                  <span className="sr-only">{item.name}</span>
                  <item.icon aria-hidden="true" className="size-8" />
                </a>
              ))}
            </div>

            <p className="mt-10 text-center text-sm/6 text-gray-400">&copy; 2025 NuestraTierraCo.</p>
          </div>
        </footer>
      </>
  )
}
