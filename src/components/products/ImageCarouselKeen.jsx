import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

export default function ImageCarouselKeen({ images }) {
    const [sliderRef] = useKeenSlider({
        loop: true,
        slides: { perView: 1 },
    });

    return (
        <div ref={sliderRef} className="keen-slider">
            {images.map((img, index) => (
                <div key={index} className="keen-slider__slide">
                    <img
                        src={img}
                        alt={`slide-${index}`}
                        className="w-36 rounded-xl" />
                </div>
            ))}
        </div>
    );
}
