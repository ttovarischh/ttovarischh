import React from "react";
import { FlexBox } from "../Quarks";
import A_CaseImage from "../Atoms/A_CaseImage";
import styled from "styled-components";
import { media } from "../../styles/mediaQueries";

interface CaseImagesGridProps {
  imageIndices: number[];
  images: Array<{
    src: string;
    poster?: string;
    shouldAutoplay?: boolean;
    description?: { en: string; ru: string }[];
  }>;
  projectName: string;
  currentLanguage: "en" | "ru";
  references: string[];
  onImageClick: (src: string) => void;
}

const FramedImagesFlexBox = styled(FlexBox)`
  gap: 1.04vw;
  transition: all 0.5s ease;
  width: 100%;

  img {
    cursor: zoom-in;
  }
`;

const FramedImagesContainer = styled(FlexBox)`
  flex-direction: column;
  width: 100%;
  gap: var(--mobile-gap-8);

  ${media.phoneLansdscape} {
    flex-direction: row;
  }

  ${media.tablets} {
    flex-direction: row;
  }

  ${media.tabletsL} {
    flex-direction: row;
  }

  ${media.laptop} {
    flex-direction: row;
    gap: 1.04vw;
  }
`;

const ImagesGrid = styled(FlexBox)`
  gap: var(--mobile-gap-8);
  width: 100%;

  ${media.laptop} {
    gap: 1.04vw;
  }

  img {
    cursor: zoom-in;
    border-radius: var(--simgle-img-border-radius);
  }

  video,
  .sk {
    border-radius: var(--simgle-img-border-radius);
  }
`;

const ImagesFlexBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: var(--mobile-gap-8);
  width: 100%;

  ${media.laptop} {
    gap: 1.04vw;
  }
`;

const M_CaseImagesGrid: React.FC<CaseImagesGridProps> = ({
  imageIndices,
  images,
  projectName,
  currentLanguage,
  references,
  onImageClick,
}) => {
  const numberOfImages = imageIndices.length;
  const isSingleReference = typeof references === "string";

  switch (true) {
    case numberOfImages === 2:
      return (
        <FramedImagesFlexBox id={isSingleReference ? references : undefined}>
          <FramedImagesContainer>
            {imageIndices.map((index, i) => {
              const image = images[index];
              if (!image) return null;

              const imageDescription = image.description
                ? image.description[0]?.[currentLanguage]
                : undefined;

              return (
                <A_CaseImage
                  key={index}
                  id={!isSingleReference ? references?.[i] : undefined}
                  src={image.src}
                  projectName={projectName}
                  imageDescription={imageDescription}
                  onClick={() => onImageClick(image.src)}
                  poster={image.poster}
                  shouldAutoplay={image.shouldAutoplay}
                />
              );
            })}
          </FramedImagesContainer>
        </FramedImagesFlexBox>
      );

    case numberOfImages === 3: {
      return (
        <ImagesGrid $direction="column">
          <A_CaseImage
            key={imageIndices[0]}
            src={images[imageIndices[0]].src}
            projectName={projectName}
            onClick={() => onImageClick(images[imageIndices[0]].src)}
            poster={images[imageIndices[0]].poster}
            shouldAutoplay={images[imageIndices[0]].shouldAutoplay}
          />
          <ImagesFlexBox key="pair-row" className="hehe">
            {Array.from({ length: 2 }).map((_, imageIndex) => {
              const index = imageIndex + 1;
              const image = images[imageIndices[index]];
              if (!image) return null;

              return (
                <div key={imageIndices[index]} style={{ width: "100%" }}>
                  <A_CaseImage
                    src={image.src}
                    projectName={projectName}
                    onClick={() => onImageClick(image.src)}
                    poster={image.poster}
                    shouldAutoplay={image.shouldAutoplay}
                  />
                </div>
              );
            })}
          </ImagesFlexBox>
        </ImagesGrid>
      );
    }

    case numberOfImages === 5: {
      return (
        <ImagesGrid $direction="column">
          <A_CaseImage
            key={imageIndices[0]}
            src={images[imageIndices[0]].src}
            projectName={projectName}
            onClick={() => onImageClick(images[imageIndices[0]].src)}
            poster={images[imageIndices[0]].poster}
            shouldAutoplay={images[imageIndices[0]].shouldAutoplay}
          />
          <ImagesFlexBox key="row">
            {Array.from({ length: 4 }).map((_, imageIndex) => {
              const index = imageIndex + 1;
              const image = images[imageIndices[index]];
              if (!image) return null;

              return (
                <div key={imageIndices[index]} style={{ width: "100%" }}>
                  <A_CaseImage
                    src={image.src}
                    projectName={projectName}
                    onClick={() => onImageClick(image.src)}
                  />
                </div>
              );
            })}
          </ImagesFlexBox>
        </ImagesGrid>
      );
    }

    case numberOfImages === 6: {
      return (
        <ImagesGrid $direction="column">
          <A_CaseImage
            key={imageIndices[0]}
            src={images[imageIndices[0]].src}
            projectName={projectName}
            onClick={() => onImageClick(images[imageIndices[0]].src)}
            poster={images[imageIndices[0]].poster}
            shouldAutoplay={images[imageIndices[0]].shouldAutoplay}
            id={!isSingleReference ? references?.[imageIndices[0]] : undefined}
          />
          {Array.from({ length: 2 }).map((_, rowIndex) => (
            <ImagesFlexBox key={`pair-${rowIndex}`}>
              {Array.from({ length: 2 }).map((_, imageIndex) => {
                const index = rowIndex * 2 + (imageIndex + 1);
                const image = images[imageIndices[index]];
                if (!image) return null;

                return (
                  <div key={imageIndices[index]} style={{ width: "100%" }}>
                    <A_CaseImage
                      src={image.src}
                      projectName={projectName}
                      onClick={() => onImageClick(image.src)}
                      id={
                        !isSingleReference
                          ? references?.[imageIndex]
                          : undefined
                      }
                    />
                  </div>
                );
              })}
            </ImagesFlexBox>
          ))}
          <A_CaseImage
            key={imageIndices[5]}
            src={images[imageIndices[5]].src}
            projectName={projectName}
            onClick={() => onImageClick(images[imageIndices[5]].src)}
            id={!isSingleReference ? references?.[imageIndices[5]] : undefined}
          />
        </ImagesGrid>
      );
    }

    default:
      return null;
  }
};

export default M_CaseImagesGrid;
