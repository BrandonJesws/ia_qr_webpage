// ImageCarousel.jsx
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const images = ["/cartelCampamento.png", "/ia2.jpg", "/ia3.jpg"];

export default function ImageCarousel({ setOpen }) {
  const autoplay = Autoplay({ delay: 4000, stopOnInteraction: false });
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [autoplay] // Activamos el plugin aquí
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);
  return (
    <div className="w-full flex flex-col items-center">
      <div className="overflow-hidden w-full" ref={emblaRef}>
        <div className="flex">
          {images.map((src, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-screen flex items-center justify-center"
            >
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                onClick={() => setOpen(src)}
                className="h-[80vh] w-auto max-w-[95vw] cursor-pointer object-contain rounded-xl shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
