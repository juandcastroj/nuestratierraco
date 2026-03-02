import { useState, useEffect } from "react";
import { people } from "../../constants/team";
import { AnimatePresence } from "framer-motion";
import Modal from "./Modal";

export default function Team() {

  const [selectedMember, setSelectedMember] = useState(null);

  const handleModal = (member = null) => {
    setSelectedMember(member);
  }

  useEffect(() => {
    document.title = "Equipo | NuestraTierraCO";
  }, []);
  
  return (
    <div className="bg-gradient-to-b  from-[#9effca] to-[#60cee5] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8 font-OpunMai">
        <div className="mx-auto max-w-2xl animate-fade-down animate-delay-[700ms]">
          <h2 className="text-4xl font-semibold tracking-tight text-balance text-blueText sm:text-5xl">Nuestro Equipo</h2>
        </div>
        <ul
          role="list"
          className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:max-w-6xl lg:grid-cols-3 lg:gap-16"
        >
          {  
            people.map((member, index) => (
            <li key={index}
                onClick={() => handleModal(member)}
                className="rounded-2xl shadow-lg bg-white/40 hover:bg-white/50 hover:backdrop-blur-md p-6 animate-fade-down animate-delay-[1200ms] cursor-pointer">
              <img alt="" src={member.imageUrl} className="mx-auto size-48 rounded-full md:size-56  object-cover" />
              <h3 className="mt-6 text-base/7 font-semibold tracking-tight text-blueText">{member.nombre}</h3>
              {/* <p className="text-sm/6 text-blueText">{member.role}</p> */}
              <ul role="list" className="mt-6 flex justify-center items-center gap-x-6">
                <li>
                    <button
                      className="px-6 py-2 bg-blueButton rounded-md 
                                 font-medium text-white hover:bg-[#25a18e] transition"
                    >
                      Mas info
                    </button>
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </div>


      {/* MODAL */}
        <AnimatePresence>
          {selectedMember && (
            <Modal selectedMember={selectedMember} setSelectedMember={setSelectedMember} />
          )}
        </AnimatePresence>

    </div>
  )
}
