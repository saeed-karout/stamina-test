import  { useState, useEffect } from "react";
import axios from "axios";


const CarouselComponent = () => {
  const [carouselItems, setCarouselItems] = useState([]);
  const [carouselIndicators, setCarouselIndicators] = useState([]);
  const [currentPosition, setCurrentPosition] = useState(0); // Track current slide

  // Fetch the latest 5 news items
  const fetchCarouselData = async () => {
    try {
      const response = await axios.get(`https://snc.shamnet.com.sa/api/news`, 
       
      );
      let data = response.data.data;

      // Sort and take only last 5 items
      data = data.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 5);

      setCarouselItems(
        data.map((item) => ({
          id: item.id,
          imageUrl: item.image,
          description: item.description,
          title: item.title,
          subtitle: item.subtitle,
        }))
      );

      setCarouselIndicators(
        data.map((item, index) => ({
          position: index,
          id: `carousel-indicator-${item.id}`,
        }))
      );
    } catch (error) {
      console.error("Failed to fetch carousel data", error);
    }
  };

  useEffect(() => {
    fetchCarouselData();
  }, []); // Refetch if locale changes

  const handlePrev = () => {
    setCurrentPosition((prevPosition) => (prevPosition === 0 ? carouselItems.length - 1 : prevPosition - 1));
  };

  const handleNext = () => {
    setCurrentPosition((prevPosition) => (prevPosition === carouselItems.length - 1 ? 0 : prevPosition + 1));
  };

  useEffect(() => {
    const carouselInterval = setInterval(() => {
      handleNext();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(carouselInterval); // Clear interval on unmount
  }, [carouselItems]);

  return (
    <div className="my-20">
      <h1 className="text-center mt-15 text-5xl font-bold leading-10 text-primary">
        Our News
      </h1>
      <hr className="my-4 mt-8 border-t-2 border-gray-dark dark:border-primary w-1/3 mx-auto" />

      <div className="mx-auto">
        <div id="carousel-example" className="relative">
          <div className="relative overflow-hidden rounded-lg" style={{ height: "80vh" }}>
            {/* Carousel items */}
            {carouselItems.map((item, index) => (
              <div
                key={item.id}
                id={`carousel-item-${item.id}`}
                className={`absolute inset-0 duration-700 ease-in-out transform ${
                  index === currentPosition ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
                }`}
              >
                <img
                  src={item.imageUrl}
                  loading="lazy"
                  className="absolute bg-contain h-auto block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="carousel"
                />
                <div className="absolute bottom-1 bg-black bg-opacity-50 text-white text-center w-full p-8 mb-10">
                  <h2 className="text-2xl font-bold">{item.title}</h2>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel indicators */}
          <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
            {carouselIndicators.map((indicator, index) => (
              <button
                key={indicator.id}
                id={indicator.id}
                type="button"
                className={`w-3 h-3 rounded-full ${index === currentPosition ? "bg-dark" : "bg-white"}`}
                aria-label={`Slide ${indicator.position}`}
                onClick={() => setCurrentPosition(index)}
              />
            ))}
          </div>

          {/* Slider controls */}
          <button
            id="data-carousel-prev"
            type="button"
            className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            onClick={handlePrev}
          >
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-black/30 dark:text-secondaryDark group-hover:bg-white/50">
              <svg
                className="w-5 h-5 text-white sm:w-6 sm:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </span>
          </button>
          <button
            id="data-carousel-next"
            type="button"
            className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            onClick={handleNext}
          >
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-black/30 group-hover:bg-white/50">
              <svg
                className="w-5 h-5 text-white sm:w-6 sm:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarouselComponent;
