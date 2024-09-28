import React from "react";
import { FlexBox } from "../Common";
import A_CaseImage from "../Atoms/A_CaseImage";
import styled from "styled-components";

interface CaseImagesGridProps {
  imageIndices: number[];
  images: Array<{ src: string; description?: { en: string; ru: string }[] }>;
  projectName: string;
  currentLanguage: "en" | "ru";
  references: string[];
  onImageClick: (src: string) => void;
}

const ImagesFlexBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.04vw;
  width: 100%;
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

  switch (true) {
    case numberOfImages === 2:
      return (
        <FlexBox $direction="column" $gap="1.04vw">
          <FlexBox $direction="row" $gap="1.04vw">
            {imageIndices.map((index) => {
              const image = images[index];
              if (!image) return null;

              const imageDescription = image.description
                ? image.description[0]?.[currentLanguage]
                : undefined;

              return (
                <A_CaseImage
                  key={index}
                  id={references[index]}
                  src={image.src}
                  projectName={projectName}
                  imageDescription={imageDescription}
                  onClick={() => onImageClick(image.src)}
                />
              );
            })}
          </FlexBox>
        </FlexBox>
      );

    case numberOfImages === 6: {
      return (
        <FlexBox $direction="column" $gap="1.04vw">
          <A_CaseImage
            key={imageIndices[0]}
            src={images[imageIndices[0]].src}
            projectName={projectName}
            onClick={() => onImageClick(images[imageIndices[0]].src)}
          />
          {Array.from({ length: 2 }).map((_, rowIndex) => (
            <ImagesFlexBox key={`pair-${rowIndex}`}>
              {Array.from({ length: 2 }).map((_, imageIndex) => {
                const index = rowIndex * 2 + (imageIndex + 1);
                const image = images[imageIndices[index]];
                if (!image) return null;

                return (
                  <div key={imageIndices[index]}>
                    <A_CaseImage
                      src={image.src}
                      projectName={projectName}
                      onClick={() => onImageClick(image.src)}
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
          />
        </FlexBox>
      );
    }

    default:
      return null;
  }
};

export default M_CaseImagesGrid;
