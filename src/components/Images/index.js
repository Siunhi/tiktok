import { forwardRef, useState } from "react";
import images from "../../assets/images";

const Image = forwardRef(
  ({ src, alt, className, customFallback = images.noImage, ...props }, ref) => {
    const [fallback, setFallback] = useState("");

    const handleError = () => {
      setFallback(customFallback);
    };

    return (
      <img
        className={className}
        ref={ref}
        src={fallback || src}
        alt={alt}
        onError={handleError}
        {...props}
      />
    );
  }
);

export default Image;
