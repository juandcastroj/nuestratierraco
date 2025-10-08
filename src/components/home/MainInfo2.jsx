import { InformationCircleIcon } from '@heroicons/react/20/solid'
import image2 from "../../assets/images/home/Historia 9.jpg";

export default function MainInfo2() {
    return(
        <>
            <div className="px-6 pt-2 pb-12 lg:px-8 bg-gradient-to-b from-[#60cee5] to-[#affff4]">   
                <div className="mx-auto max-w-3xl text-base/7 text-gray-700">     
                    <figure className="mt-16 flex flex-col">
                        <img
                            alt=""
                            src={image2}
                            className="aspect-video rounded-xl bg-gray-50 object-cover"
                        />
                        <figcaption className="mt-4 flex gap-x-2 text-sm/6 text-blueText">
                            <InformationCircleIcon aria-hidden="true" className="mt-0.5 size-5 flex-none text-blueText"/>
                            Participación en ferias de emprendimiento.
                        </figcaption>
                    </figure>
                </div>
            </div>
        </>
    )
}