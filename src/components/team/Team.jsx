import { useState, useEffect } from "react";
import { people } from "../../constants/team";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Heart, Palette, PawPrint, Sparkles } from "lucide-react";

export default function Team() {

  const [selectedMember, setSelectedMember] = useState(null);
  const [isOpen, setIsOpen] = useState(false); 

  const openModal = (member) => {
    setSelectedMember(member);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedMember(null);
  };

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
                onClick={() => openModal(member)}
                className="rounded-2xl shadow-lg bg-white/40 hover:bg-white/50 hover:backdrop-blur-md p-6 animate-fade-down animate-delay-[1200ms] cursor-pointer">
              <img alt="" src={member.imageUrl} className="mx-auto size-48 rounded-full md:size-56  object-cover" />
              <h3 className="mt-6 text-base/7 font-semibold tracking-tight text-blueText">{member.nombre}</h3>
              {/* <p className="text-sm/6 text-blueText">{member.role}</p> */}
              <ul role="list" className="mt-6 flex justify-center items-center gap-x-6">

                <li>
                    <button
                      onClick={() => openModal(member)}
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
          {isOpen && selectedMember && (
            <motion.div
              className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50 px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-white rounded-2xl p-6 max-w-lg w-full shadow-2xl relative"
                initial={{ opacity: 0, scale: 0.85, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.85, y: -20 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                {/* Botón cerrar */}
                <button
                  onClick={closeModal}
                  className="absolute top-5 right-5 text-gray-500 hover:text-gray-800 text-xl"
                >
                  ✖
                </button>

                {/* Nombre */}
                <h2 className="text-3xl font-bold text-center text-blueText">
                  {selectedMember.nombre}
                </h2>

                {/* Imagen */}
                <div className="flex justify-center mt-4">
                  <img
                    alt={selectedMember.nombre}
                    src={selectedMember.imageUrl}
                    className="rounded-3xl size-48 md:size-56 object-cover border-4 border-gray-100 shadow-md"
                  />
                </div>

                {/* Info en ficha */}
                <div className="mt-6 grid grid-cols-1 text-gray-700 text-sm">
                  <div className="flex items-start space-x-2">
                    <Briefcase className="w-5 h-5 text-gray-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Profesión</p>
                      <p>{selectedMember.profesion}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <Heart className="w-5 h-5 text-gray-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Vocación</p>
                      <p>{selectedMember.vocacion}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <Palette className="w-5 h-5 text-gray-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Hobbie</p>
                      <p>{selectedMember.hobbie}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <PawPrint className="w-5 h-5 text-gray-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Animal</p>
                      <p>{selectedMember.animal}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <Sparkles className="w-5 h-5 text-gray-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Dato curioso</p>
                      <p>{selectedMember.datoCurioso}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

    </div>
  )
}
