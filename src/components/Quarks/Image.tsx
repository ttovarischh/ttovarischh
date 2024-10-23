import React, { useState } from "react";
import A_Skeleton from "../Atoms/A_Skeleton";
import styled from "styled-components";

interface ImageProps {
  src: string;
  alt: string;
  id?: any;
  $width?: string;
  $aspectRatio?: number;
  $className?: string;
  $imageDescription?: string;
  onClick?: any;
  $linkcard?: boolean;
  $imageClassName?: string;
}

const CaseImg = styled.img<{
  $imageDescription?: string;
}>`
  height: auto;
  object-fit: cover;
  transition: all 0.5s ease;
  flex: 1 1 0;
  max-width: 100%;
`;

const LinkCardImg = styled.img`
  height: 100%;
  object-fit: cover;
  max-width: 100%;
  height: auto;
`;

const Image = React.memo((props: ImageProps) => {
  const {
    src,
    alt,
    $width,
    $aspectRatio,
    $imageDescription,
    id,
    onClick,
    $className,
    $linkcard,
    $imageClassName,
  } = props;
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);

    // setTimeout(() => {
    //   setIsLoading(false);
    // }, 20000);
  };
  const handleImageError = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && (
        <A_Skeleton
          $width={$width}
          $aspectRatio={$aspectRatio}
          className={$className}
        />
      )}
      {$linkcard ? (
        <LinkCardImg
          src={src}
          alt={alt}
          onLoad={handleImageLoad}
          onError={handleImageError}
          style={{ display: isLoading ? "none" : "block" }}
        />
      ) : (
        <CaseImg
          src={src}
          alt={alt}
          id={id}
          onLoad={handleImageLoad}
          onError={handleImageError}
          style={{ display: isLoading ? "none" : "block" }}
          $imageDescription={$imageDescription}
          onClick={onClick}
          className={$imageClassName}
        />
      )}
    </>
  );
});

export default Image;
