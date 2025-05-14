import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// Define service types
interface ServiceItem {
  ID: number;
  post_title: string;
  image_url: string;
}

const SwiperCard = ({ communities }: { communities: ServiceItem[] }) => {
  // Add CSS to hide default Swiper navigation arrows
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      .swiper-button-next:after, 
      .swiper-button-prev:after {
        display: none !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto">
        {/* Heading */}
        <h2 className="text-xl md:text-3xl font-semibold heading-font  text-center text-[#887C68] uppercase tracking-wider my-10 md:mb-16">
          OUR SERVICES
        </h2>

        {/* Swiper with custom navigation */}
        <div className="relative container pl-7 !md:pl-0 md:px-7">
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            breakpoints={{
              // Mobile first approach
              320: {
                slidesPerView: 1.3,
                spaceBetween: 20,
              },
              // Tablet
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              // Desktop
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="services-swiper"
          >
            {communities.map((service) => (
              <SwiperSlide key={service.ID}>
                <div className="relative h-96 md:h-[552px] overflow-hidden">
                  {/* Image */}
                  <img
                    src={service.image_url}
                    alt={service.post_title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />

                  {/* Overlay with text */}
                  <div className="absolute inset-0 bg-opacity-30 bg-gradient-to-t from-black/70 to-transparent flex items-end justify-center">
                    <h3 className="text-white text-[18px] md:text-2xl uppercase font-medium p-6 text-center w-full">
                      {service.post_title}
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom navigation buttons - now visible on mobile */}
          <button className="swiper-button-prev absolute left-0 top-1/3 transform -translate-y-1/12 z-10 focus:outline-none block">
            {/* Responsive button size */}
            <div className="bg-[#F6F6F6] shadow-md p-4 hidden md:flex items-center justify-center w-0 h-0 md:w-20 md:h-12 ">
              <span className="text-lg md:text-2xl text-[#64615B] md:block hidden">
                &#x276E;
              </span>
            </div>
          </button>

          <button className="swiper-button-next absolute right-0 top-1/3 transform -translate-y-1/12 z-10 focus:outline-none block">
            {/* Responsive button size */}
            <div className="bg-[#F6F6F6] shadow-md p-4 hidden md:flex items-center justify-center w-0 h-0 md:w-20 md:h-12 ">
              <span className="text-lg md:text-2xl text-[#64615B] md:block hidden">
                &#x276F;
              </span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SwiperCard;
