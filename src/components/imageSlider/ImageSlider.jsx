import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const ImageSlider = () => {
  const slides = [
    {
      url: 'https://images.unsplash.com/photo-1650435489945-96b2b19b943b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      title: 'Lobster',
    },

    {
      url: 'https://images.unsplash.com/photo-1676037150304-e4c4a1d585f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      title: 'Sushi',
    },

    {
      url: 'https://images.unsplash.com/photo-1568096889942-6eedde686635?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      title: 'Ramen Noodles',
    },

    {
      url: 'https://cdn-dlopd.nitrocdn.com/WvjGxjzkqpCRBAFiAQBxkifGOZsxmrbF/assets/static/optimized/rev-3cf5128/wp-content/uploads/2021/09/Masala-Fish-Curry-Recipe-min-scaled.jpg',
      title: 'Fish Curry',
    },

    {
      url: 'https://cdn.pixabay.com/photo/2017/06/28/17/40/chicken-2451482_1280.jpg',
      title: 'Chicken wings',
    },

    {
      url: 'https://blog.amigofoods.com/wp-content/uploads/2019/04/Spanish-Desserts.jpeg',
      title: 'Dessert',
    },

    {
      url: 'https://www.archanaskitchen.com/images/archanaskitchen/Indian_Non_Veg_Recipes/Butter_chicken_recipe.jpg',
      title: 'Butter Chicken',
    },

    {
      url: 'https://img.freepik.com/free-photo/meat-ribs-with-vegetables_140725-44.jpg?w=2000',
      title: 'Barbeque Goat Ribs',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="max-w-[1400px] h-[580px] w-full m-auto py-15 px-4 relative group">
      <div
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
      ></div>
      {/* Left Arrow */}
      <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft size={30} onClick={prevSlide} />
      </div>
      {/* Right Arrow */}
      <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight size={30} onClick={nextSlide} />
      </div>
      {/* bottom dotted */}
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
