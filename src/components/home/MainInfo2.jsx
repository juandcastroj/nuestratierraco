import { InformationCircleIcon } from '@heroicons/react/20/solid'
import image2 from "../../assets/images/home/Historia 9.jpg";

export default function MainInfo2() {
    return(
        <>
            <div className="px-6 py-8 lg:px-8 bg-gradient-to-b from-[#60cee5] to-[#affff4]">   
                <div className="mx-auto max-w-3xl text-base/7 text-gray-700">     
                    <div className="">
                        {/* <p className="text-blueText">
                            Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae
                            sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.
                            Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae
                            sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.
                        </p> */}
                    </div>

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