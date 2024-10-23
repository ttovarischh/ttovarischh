import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  EmblaCarouselType,
  EmblaEventType,
  EmblaOptionsType,
} from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import { PP_18, PP_20 } from "../Quarks";
import { useTranslation } from "react-i18next";
import A_Skeleton from "./A_Skeleton";
import Slide from "../Quarks/Slide";
import { useScreenSize } from "../../styles/ScreenSizeContext";

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max);

interface Slide {
  imgSrc: string;
  description: {
    en: string;
    ru: string;
  };
}

type PropType = {
  slides: Slide[];
  options?: EmblaOptionsType;
  references?: string;
  currentLanguage: "en" | "ru";
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options, currentLanguage } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const tweenFactor = useRef(0);
  const tweenNodes = useRef<HTMLElement[]>([]);
  const { isLaptop } = useScreenSize();

  const TWEEN_FACTOR_BASE = isLaptop ? 0.07 : 0.04;

  // const TWEEN_FACTOR_BASE = 0.07;
  // const TWEEN_FACTOR_BASE = 0.04;

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector(".embla__slide__image") as HTMLElement;
    });
  }, []);

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  const tweenScale = useCallback(
    (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = emblaApi.internalEngine();
      const scrollProgress = emblaApi.scrollProgress();
      const slidesInView = emblaApi.slidesInView();
      const isScrollEvent = eventName === "scroll";

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress;
        const slidesInSnap = engine.slideRegistry[snapIndex];

        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target();

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target);

                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress);
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress);
                }
              }
            });
          }

          const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
          const scale = numberWithinRange(tweenValue, 0, 1).toString();
          const tweenNode = tweenNodes.current[slideIndex];
          tweenNode.style.transform = `scale(${scale})`;
        });
      });
    },
    []
  );

  useEffect(() => {
    if (!emblaApi) return;

    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenScale(emblaApi);

    emblaApi
      .on("reInit", setTweenNodes)
      .on("reInit", setTweenFactor)
      .on("reInit", tweenScale)
      .on("scroll", tweenScale)
      .on("slideFocus", tweenScale);
  }, [emblaApi, tweenScale]);

  const [loading, setLoading] = useState<boolean[]>(
    Array(slides.length).fill(true)
  );

  const handleImageLoad = (index: number) => {
    setLoading((prevLoading) => {
      const newLoading = [...prevLoading];
      newLoading[index] = false;
      return newLoading;
    });
  };

  return (
    <div
      className="embla"
      id={props.references}
      style={loading.includes(true) ? { width: "100vw" } : undefined}
    >
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="embla__slide" key={index}>
              <Slide
                src={slide.imgSrc}
                alt={`Slide ${index + 1}`}
                style={{
                  width: "100%",
                  height: "auto",
                  display: loading[index] ? "none" : "block",
                }}
                onLoad={() => handleImageLoad(index)}
                isLoading={loading[index]}
              />
              {selectedIndex === index &&
                (isLaptop ? (
                  <PP_20 color="#6B6863">
                    {slide.description[currentLanguage]}
                  </PP_20>
                ) : (
                  <PP_18 color="#6B6863">
                    {slide.description[currentLanguage]}
                  </PP_18>
                ))}
            </div>
          ))}
        </div>
      </div>
      {isLaptop && (
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      )}
      <div className="embla__controls">
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
