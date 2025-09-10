import React, { useState, useEffect } from 'react';

interface ImageCarouselProps {
  images: string[];
  alt: string;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, alt }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Muda a cada 3 segundos

    return () => clearInterval(interval);
  }, [images.length]);

  const goToSlide = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-images">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={alt}
            className={`project-image carousel-image ${index === currentImageIndex ? 'active' : ''}`}
          />
        ))}
      </div>
      
      {images.length > 1 && (
        <>
          {/* Indicadores */}
          <div className="carousel-indicators">
            {images.map((_, index) => (
              <button
                key={index}
                className={`carousel-indicator ${index === currentImageIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Ir para imagem ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ImageCarousel;
