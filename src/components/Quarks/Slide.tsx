//A_Slider
import React from "react";
import A_Skeleton from "../Atoms/A_Skeleton";

interface SlideProps {
  src: string;
  alt: string;
  onLoad: () => void;
  style: React.CSSProperties;
  isLoading: boolean;
}

const Slide = React.memo((props: SlideProps) => {
  const { src, alt, onLoad, style, isLoading } = props;

  return (
    <>
      <img
        className="embla__slide__image"
        src={src}
        alt={alt}
        style={style}
        onLoad={onLoad}
      />
      {isLoading && (
        <A_Skeleton
          $width="100%"
          $aspectRatio={16 / 9}
          className="embla__slide__image"
        />
      )}
    </>
  );
});

export default Slide;
