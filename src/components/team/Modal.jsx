import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { Briefcase, Heart, Palette, PawPrint, Sparkles } from "lucide-react";

export default function Modal({selectedMember, setSelectedMember}) {
  
    return (
        <>
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
                    onClick={() => setSelectedMember(null)}
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
        </>
  )
}

Modal.propTypes = {
  selectedMember: PropTypes.shape({
    nombre: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    profesion: PropTypes.string.isRequired,
    vocacion: PropTypes.string.isRequired,
    hobbie: PropTypes.string.isRequired,
    animal: PropTypes.string.isRequired,
    datoCurioso: PropTypes.string.isRequired,
  }).isRequired,
  setSelectedMember: PropTypes.func.isRequired,
};