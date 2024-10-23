import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FlexBox } from "../components/Quarks";
import T_ProjectsGrid from "../components/Templates/T_ProjectsGrid";
import M_MainComp from "../components/Molecules/M_MainComp";
import A_PageTextDivider from "../components/Atoms/A_PageTextDivider";
import { useNavigate } from "react-router-dom";
import { works } from "../db";
import M_ImageMarquee from "../components/Molecules/M_ImageMarquee";
import { Project } from "../db/types";
import LazyLoad from "react-lazyload";
import { useScreenSize } from "../styles/ScreenSizeContext";
import A_Loader from "../components/Atoms/A_Loader";

interface HomePageProps {
  projects: Array<Project>;
  currentLanguage: "en" | "ru";
  t: (key: string) => string;
}

const PageWrapper = styled(FlexBox)`
  width: 100%;
  align-items: center;
  flex-direction: column;
  gap: 100px;
`;

const PageMainContentWrapper = styled(FlexBox)`
  align-items: center;
  flex-direction: column;
`;

const HomePage: React.FC<HomePageProps> = ({
  projects,
  currentLanguage,
  t,
}) => {
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);
  const { isPhoneLandscape, isTablet, isTabletLandscape, isLaptop } =
    useScreenSize();

  const MAX_SCROLL = 200;
  const SCROLL_DELAY = 400;
  const SPEED_FACTOR = 0.5;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY >= SCROLL_DELAY) {
        const movement = (currentScrollY - SCROLL_DELAY) * SPEED_FACTOR;

        if (movement <= MAX_SCROLL) {
          setScrollY(movement);
        } else {
          setScrollY(MAX_SCROLL);
        }
      } else {
        setScrollY(0);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const topMarqueeWorks = works.top;
  const bottomMarqueeWorks = works.bottom;
  const [imageHeight, setImageHeight] = useState("75vw");

  useEffect(() => {
    if (isPhoneLandscape) {
      setImageHeight("80vh");
    } else if (isTablet || isTabletLandscape) {
      setImageHeight("50vh");
    } else if (isLaptop) {
      setImageHeight("29.38vw");
    } else {
      setImageHeight("75vw");
    }
  }, [isPhoneLandscape, isTablet, isTabletLandscape, isLaptop]);

  const [loading, setLoading] = useState(true);
  const [growSquare, setGrowSquare] = useState(false);
  const [loadingPercentage, setLoadingPercentage] = useState(0);

  const imageSources = [
    "https://firebasestorage.googleapis.com/v0/b/ttovarischh-9c624.appspot.com/o/home%2Fp2.webp?alt=media&token=49801e81-4158-4cdc-b5c0-d7ecc9504b7f",
    "https://firebasestorage.googleapis.com/v0/b/ttovarischh-9c624.appspot.com/o/home%2Fdesign.webp?alt=media&token=eac5f973-0a73-4640-8627-cd72bad9459c",
    "https://firebasestorage.googleapis.com/v0/b/ttovarischh-9c624.appspot.com/o/home%2Fdev.webp?alt=media&token=174eab6c-f6bb-4566-bf4f-abd525768001",
  ];

  useEffect(() => {
    if (loading) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    const checkImageCache = () => {
      let loadedCount = 0;

      const imagePromises = imageSources.map((src) => {
        return new Promise<void>((resolve) => {
          const img = new Image();
          img.src = src;

          img.onload = () => {
            loadedCount++;

            const newPercentage = (loadedCount / imageSources.length) * 100;

            let currentPercentage = loadingPercentage;
            const interval = setInterval(() => {
              if (currentPercentage < newPercentage) {
                currentPercentage += 1;
                setLoadingPercentage(currentPercentage);
              } else {
                clearInterval(interval);
              }
            }, 5);

            resolve();
          };
        });
      });

      Promise.all(imagePromises).then(() => {
        setTimeout(() => {
          setGrowSquare(true);
        }, 2000);

        setTimeout(() => {
          document.body.classList.remove("no-scroll");
          setLoading(false);
        }, 2800);
      });
    };

    setLoadingPercentage(0);
    checkImageCache();
  }, []);

  return (
    <>
      {loading && (
        <A_Loader
          growSquare={growSquare}
          loadingPercentage={loadingPercentage}
        />
      )}
      <PageWrapper>
        <M_MainComp scrollY={scrollY} t={t} />
        <FlexBox $direction="column" $alignItems="center">
          <A_PageTextDivider
            header={t("home.selected")}
            text={t("home.loveit")}
            iconName="sup"
            buttonText={t("home.seeAll")}
            handleButtonClick={() => navigate("/work")}
          />
          <T_ProjectsGrid
            projects={projects}
            featured
            currentLanguage={currentLanguage}
            homepage
            similar={false}
          />
        </FlexBox>
        <PageMainContentWrapper>
          <A_PageTextDivider
            header={t("home.moreWork")}
            text={t("home.sometimes")}
            iconName="plus"
            reverse
            buttonText={t("home.aboutMe")}
            handleButtonClick={() => navigate("/about")}
          />
          <LazyLoad
            offset={500}
            once
            style={{
              height: `calc(24px + 1.25rem + ${imageHeight})`,
              marginBottom: "32px",
            }}
          >
            <M_ImageMarquee
              works={topMarqueeWorks}
              direction="left"
              currentLanguage={currentLanguage}
              imageHeight={imageHeight}
            />
          </LazyLoad>
          <LazyLoad
            offset={500}
            once
            style={{
              height: `calc(24px + 1.25rem + ${imageHeight})`,
            }}
          >
            <M_ImageMarquee
              works={bottomMarqueeWorks}
              direction="right"
              currentLanguage={currentLanguage}
              imageHeight={imageHeight}
            />
          </LazyLoad>
        </PageMainContentWrapper>
      </PageWrapper>
    </>
  );
};

export default HomePage;
