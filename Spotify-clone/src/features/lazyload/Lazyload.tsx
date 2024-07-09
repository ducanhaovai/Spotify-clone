import React, { useEffect, useRef, useState } from "react";

interface Props {
  src: string;
  alt: string;
  className: string;
}

const Lazyload: React.FC<Props> = ({ src, alt, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsLoaded(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <img
      ref={imageRef}
      src={isLoaded ? src : ""}
      alt={alt}
      className={className}
    />
  );
};

export default Lazyload;
