import { Link } from "react-router-dom";
import { navigation } from "../constants/footer";
import { footerItems } from "../constants/navbar";
import WhatsAppButton from "./home/WhatsAppButton";

export default function Footer() {
  return (
      <>
        <WhatsAppButton />

        <footer className="bg-blueText border-t-[1px] border-gray-600">
          <div className="mx-auto max-w-7xl overflow-hidden px-6 py-12 lg:px-8">
            <nav aria-label="Footer" className="-mb-6 grid grid-cols-2 sm:flex flex-wrap justify-center gap-x-12 gap-y-3 text-sm/6">
              { footerItems.map((item) => (
                <Link key={item.name} to={item.to} className="text-[#9fffcb] hover:text-white font-semibold">
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="mt-16 flex justify-center gap-x-10">
              { navigation.map((item) => (            
                <a key={item.name} href={item.href} className="text-[#9fffcb] hover:text-white" target="_blank">
                  <span className="sr-only">{item.name}</span>
                  <item.icon aria-hidden="true" className="size-8" />
                </a>
              ))}
            </div>

            <p className="mt-10 text-center font-bold text-sm/6 text-[#9fffcb]">&copy; 2025   nuestratierraco</p>
          </div>
        </footer>
      </>
  )
}
