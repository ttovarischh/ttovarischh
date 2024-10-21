import React from "react";
import styled, { useTheme } from "styled-components";
import {
  FlexBox,
  PP_80,
  PP_14,
  PP_32,
  PP_20,
  PP_40,
  PP_24,
  PP_16,
} from "../Quarks";
import { Link } from "react-router-dom";
import A_Icon from "../Atoms/A_Icon";
import A_Button from "../Atoms/A_Button";
import { useScreenSize } from "../../styles/ScreenSizeContext";
import { media } from "../../styles/mediaQueries";

interface FooterProps {
  currentLanguage: "en" | "ru";
  t: (key: string) => string;
}

const FullFooterWrapper = styled(FlexBox)`
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 10px;
  margin-top: 80px;
  height: calc(100vh - 128px);

  @supports (height: 100lvh) {
    height: calc(100lvh - 68px);
  }

  ${media.phoneLansdscape} {
    height: auto;
  }

  ${media.laptop} {
    height: auto;
    gap: 1.85vw;
    margin-top: 10vh;
  }
`;

const FooterWrapper = styled(FlexBox)`
  position: relative;
  flex-direction: column;
  width: 100%;
  flex-grow: 1;
  justify-content: space-between;
  padding: 16px max(16px, env(safe-area-inset-left, 16px)) 16px
    max(16px, env(safe-area-inset-right, 16px));
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.footer.bg};
  border-radius: 12px 12px 0px 0px;

  ::selection {
    color: ${({ theme }) => theme.white};
    background-color: ${({ theme }) => theme.black};
  }

  ::-moz-selection {
    color: ${({ theme }) => theme.white};
    background-color: ${({ theme }) => theme.black};
  }

  a {
    transition: all 0.5s ease;
    &:hover {
      opacity: 0.5;
    }
  }

  ${media.iphoneSE} {
    min-height: 100vh;
  }

  ${media.laptop} {
    padding: calc(2.5vw - 12px);
  }
`;

const FooterUpperRow = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 2fr 1fr 3fr;
  grid-column-gap: 1.04vw;
  width: 100%;
  box-sizing: border-box;
  border-radius: 20px 20px 0px 0px;

  ${media.tablets} {
    display: flex;
    flex-direction: column;
  }

  ${media.tabletsL} {
    display: flex;
    flex-direction: column;
  }

  ${media.laptop} {
    display: grid;
    // grid-template-columns: 2fr 1fr 3fr;
    grid-template-columns: repeat(6, 1fr);
    grid-row-gap: 1.04vw;

    #footerpp80 {
      font-size: 4.5rem !important;
      line-height: 105%;
    }
  }
`;

const FooterLogoRow = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
  align-items: baseline;

  .p {
    width: 20.09vw;
    height: 26.05vw;
  }
  .dot {
    width: 5.8vw;
    height: 5.32vw;
  }

  .s {
    width: 22.83vw;
    height: 27.2vw;
  }

  ${media.phoneLansdscape} {
    margin-top: 60px;
  }

  ${media.tablets} {
    margin-top: 120px;
  }

  ${media.tabletsL} {
    margin-top: 120px;
    display: grid;
    grid-column-gap: var(--mobile-gap-12);
    grid-template-columns: repeat(4, 1fr);

    :nth-child(2) {
      justify-self: unset;
    }
    :nth-child(3) {
      grid-column-start: unset;
    }
    :nth-child(4) {
      grid-column-start: unset;
    }

    .p {
      width: 16.09vw;
      height: 22.05vw;
    }
    .dot {
      width: 4.8vw;
      height: 4.32vw;
    }

    .s {
      width: 18.83vw;
      height: 23.2vw;
    }
  }

  ${media.laptop} {
    display: grid;
    margin-top: 14.81vh;
    grid-template-columns: repeat(6, 1fr);
    grid-column-gap: 1.04vw;

    :nth-child(2) {
      justify-self: right;
    }
    :nth-child(3) {
      grid-column-start: 4;
    }
    :nth-child(4) {
      grid-column-start: 6;
    }

    .p {
      width: 11.25vw;
      height: 14.58vw;
    }
    .dot {
      width: 3.25vw;
      height: 2.98vw;
    }

    .s {
      width: 12.78vw;
      height: 15.23vw;
    }
  }
`;

const FooterDotsRow = styled.div`
  display: flex;
  gap: 10px;

  ${media.laptop} {
    justify-content: space-between;
    gap: 0;
  }
`;

const FooterBottomRow = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-column-gap: 1.04vw;
  width: 100%;
  box-sizing: border-box;
  margin-top: 2.96vh;

  :nth-child(2) {
    grid-column-start: 4;
  }
  :nth-child(3) {
    grid-column-start: 6;
  }
`;

const FooterUpperRowContact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 32px;
  color: ${({ theme }) => theme.main_grey};
  a {
    text-decoration: underline;
    text-decoration-color: ${({ theme }) => theme.medium_grey};
  }
  grid-column-start: 1;
  grid-column-end: 3;

  button {
    align-self: flex-start;
  }

  ${media.laptop} {
    grid-column-start: 1;
    grid-column-end: 4;
  }
`;

const FooterUpperRowColumns = styled.div`
  grid-column-start: 3;
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: var(--mobile-gap-32);
  grid-column-gap: var(--mobile-gap-12);
  width: 100%;
  box-sizing: border-box;

  ${media.tablets} {
    grid-template-columns: repeat(4, 1fr);
  }

  ${media.tabletsL} {
    grid-template-columns: repeat(4, 1fr);
  }

  ${media.laptop} {
    grid-column-start: 4;
    grid-column-end: 7;
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 1.04vw;
  }
`;

const FooterUpperRowColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  ${media.tablets} {
    gap: 24px;
  }

  ${media.tabletsL} {
    gap: 24px;
  }
`;

const M_Footer = ({ currentLanguage, t }: FooterProps) => {
  const theme = useTheme();
  const { isTablet, isPhoneLandscape, isLaptop, isTabletLandscape } =
    useScreenSize();

  console.log(isLaptop);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (isTablet || isTabletLandscape) {
    return (
      <FullFooterWrapper id="footer">
        <FlexBox $justifyContent="end" style={{ width: "calc(100% - 1.25vw" }}>
          <A_Button
            backtotop
            buttonText={t("footer.backToTop")}
            disabled={false}
            handleButtonClick={scrollToTop}
          />
        </FlexBox>
        <FooterWrapper>
          <FooterUpperRow>
            <FooterUpperRowContact>
              <PP_80
                medium
                color={theme.main_grey}
                lineHeight="88%"
                id="footerpp80"
              >
                {t("footer.mainContact1")}
                <br></br>
                {t("footer.mainContact2")}&nbsp;
                {isTablet ||
                  (isTabletLandscape &&
                    !isLaptop &&
                    t("footer.mainContactLink"))}
                {isLaptop && (
                  <a target="_blank" href="mailto: polinasot@gmail.com">
                    {t("footer.mainContactLink")}
                  </a>
                )}
                .
              </PP_80>
              {!isLaptop && (
                <A_Button
                  main
                  buttonText={t("footer.sayHi")}
                  handleButtonClick={() =>
                    window.open(
                      "mailto:polinasot@gmail.com?subject=Hi there!&body=What do you want?",
                      "_blank"
                    )
                  }
                />
              )}
            </FooterUpperRowContact>
            <FooterUpperRowColumns>
              <FooterUpperRowColumn>
                <PP_32 color={theme.main_grey} medium>
                  {t("footer.sitePlan")}
                </PP_32>
                <FlexBox $direction="column" $gap="4px">
                  <Link to="/">
                    <PP_20 medium color={theme.medium_grey}>
                      {t("footer.home")}
                    </PP_20>
                  </Link>
                  <Link to="/work">
                    <PP_20 medium color={theme.medium_grey}>
                      {t("footer.work")}
                    </PP_20>
                  </Link>
                  <Link to="/about">
                    <PP_20 medium color={theme.medium_grey}>
                      {t("footer.about")}
                    </PP_20>
                  </Link>
                </FlexBox>
              </FooterUpperRowColumn>
              <FooterUpperRowColumn>
                <PP_32 color={theme.main_grey} medium>
                  {t("footer.followMe")}
                </PP_32>
                <FlexBox $direction="column" $gap="4px">
                  <PP_20 medium color={theme.medium_grey}>
                    <a
                      target="_blank"
                      href="https://www.behance.net/ttovarischh"
                    >
                      Behance
                    </a>
                  </PP_20>
                  <PP_20 medium color={theme.medium_grey}>
                    <a
                      target="_blank"
                      href="https://www.are.na/polina-sotnikova-8r-1jefvew0/channels"
                    >
                      Are.na
                    </a>
                  </PP_20>
                  <PP_20 medium color={theme.medium_grey}>
                    <a
                      target="_blank"
                      href="https://www.instagram.com/ttovarischh/"
                    >
                      Instagram
                    </a>
                  </PP_20>
                </FlexBox>
              </FooterUpperRowColumn>
              {!isLaptop && (
                <FooterUpperRowColumn>
                  <PP_32 color={theme.main_grey} medium>
                    {t("footer.byTheWay")}
                  </PP_32>
                  <FlexBox $direction="column" $gap="4px">
                    <PP_20 medium color={theme.medium_grey}>
                      {t("footer.availableHire")}
                    </PP_20>
                    <PP_20 medium color={theme.medium_grey}>
                      {t("footer.based")}
                    </PP_20>
                    <PP_20 medium color={theme.medium_grey}>
                      Made w/ ⚛React
                    </PP_20>
                  </FlexBox>
                </FooterUpperRowColumn>
              )}
              <FooterUpperRowColumn>
                <PP_32 color={theme.main_grey} medium>
                  {t("footer.contactMe")}
                </PP_32>
                <FlexBox $direction="column" $gap="4px">
                  <PP_20 medium color={theme.medium_grey}>
                    polinasot@gmail.com
                  </PP_20>
                  <PP_20 medium color={theme.medium_grey}>
                    <a target="_blank" href="https://t.me/ttovarischh">
                      Telegram
                    </a>
                  </PP_20>
                  <PP_20 medium color={theme.medium_grey}>
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/in/ttovarischh/"
                    >
                      LinkedIn
                    </a>
                  </PP_20>
                </FlexBox>
              </FooterUpperRowColumn>
            </FooterUpperRowColumns>
          </FooterUpperRow>
          <FooterLogoRow>
            <A_Icon iconName="p" className="p" />
            <A_Icon iconName="dot" className="dot" />
            <A_Icon iconName="s" className="s" />
            <FooterDotsRow>
              <A_Icon iconName="dot" className="dot" />
              <A_Icon iconName="dot" className="dot" />
              <A_Icon iconName="dot" className="dot" />
            </FooterDotsRow>
          </FooterLogoRow>
          {isLaptop && (
            <FooterBottomRow>
              <PP_14 medium color={theme.medium_grey}>
                {t("footer.copyright")}
              </PP_14>
              <FlexBox $gap="0.2vw">
                <PP_14 medium color={theme.medium_grey}>
                  {t("footer.availableHire")}
                </PP_14>
                <PP_14 medium color={theme.medium_grey}>
                  •
                </PP_14>
                <PP_14 medium color={theme.medium_grey}>
                  <a
                    target="_blank"
                    href={
                      currentLanguage == "en"
                        ? "https://drive.google.com/file/d/1CUUQhceAEWkuyIIvOcf509_t-pKz6Rx0/view?usp=sharing"
                        : "https://drive.google.com/file/d/1n44MV-pDMMVsyf5hL8F1B11OuOOJzFxL/view?usp=sharing"
                    }
                  >
                    {t("footer.resume")}
                  </a>
                </PP_14>
              </FlexBox>
              <FlexBox $gap="0.2vw" $alignItems="baseline">
                {!isTablet && !isTabletLandscape && (
                  <>
                    <PP_14 medium color={theme.medium_grey}>
                      {t("footer.upd")}
                    </PP_14>
                    <PP_14 medium color={theme.medium_grey}>
                      •
                    </PP_14>
                  </>
                )}
                <PP_14 medium color={theme.medium_grey}>
                  {t("footer.made")}
                </PP_14>
              </FlexBox>
            </FooterBottomRow>
          )}
        </FooterWrapper>
      </FullFooterWrapper>
    );
  } else {
    return (
      <FullFooterWrapper id="footer">
        <FlexBox
          $justifyContent="end"
          // style={{ width: "calc(100% - 1.25vw" }}
          style={{
            width: "calc(100% - max(16px, env(safe-area-inset-left, 16px)))",
          }}
        >
          <A_Button
            backtotop
            buttonText={t("footer.backToTop")}
            disabled={false}
            handleButtonClick={scrollToTop}
          />
        </FlexBox>
        <FooterWrapper>
          <FlexBox>
            <FooterUpperRowContact>
              <PP_40
                medium
                color={theme.main_grey}
                lineHeight="88%"
                id="footerpp80"
              >
                {t("footer.mainContact1")}
                <br></br>
                {t("footer.mainContact2")}&nbsp;
                {t("footer.mainContactLink")}.
              </PP_40>
              <A_Button
                main
                buttonText={t("footer.sayHi")}
                handleButtonClick={() =>
                  window.open(
                    "mailto:polinasot@gmail.com?subject=Hi there!&body=What do you want?",
                    "_blank"
                  )
                }
              />
            </FooterUpperRowContact>
            <FooterUpperRowColumns>
              <FooterUpperRowColumn>
                <PP_24 color={theme.main_grey} medium>
                  {t("footer.sitePlan")}
                </PP_24>
                <FlexBox $direction="column" $gap="4px">
                  <Link to="/">
                    <PP_16 medium color={theme.medium_grey}>
                      {t("footer.home")}
                    </PP_16>
                  </Link>
                  <Link to="/work">
                    <PP_16 medium color={theme.medium_grey}>
                      {t("footer.work")}
                    </PP_16>
                  </Link>
                  <Link to="/about">
                    <PP_16 medium color={theme.medium_grey}>
                      {t("footer.about")}
                    </PP_16>
                  </Link>
                </FlexBox>
              </FooterUpperRowColumn>

              <FooterUpperRowColumn>
                <PP_24 color={theme.main_grey} medium>
                  {t("footer.followMe")}
                </PP_24>
                <FlexBox $direction="column" $gap="4px">
                  <PP_16 medium color={theme.medium_grey}>
                    <a
                      target="_blank"
                      href="https://www.behance.net/ttovarischh"
                    >
                      Behance
                    </a>
                  </PP_16>
                  <PP_16 medium color={theme.medium_grey}>
                    <a
                      target="_blank"
                      href="https://www.are.na/polina-sotnikova-8r-1jefvew0/channels"
                    >
                      Are.na
                    </a>
                  </PP_16>
                  <PP_16 medium color={theme.medium_grey}>
                    <a
                      target="_blank"
                      href="https://www.instagram.com/ttovarischh/"
                    >
                      Instagram
                    </a>
                  </PP_16>
                </FlexBox>
              </FooterUpperRowColumn>

              <FooterUpperRowColumn>
                <PP_24 color={theme.main_grey} medium>
                  {t("footer.contactMe")}
                </PP_24>
                <FlexBox $direction="column" $gap="4px">
                  <PP_16 medium color={theme.medium_grey}>
                    polinasot@gmail.com
                  </PP_16>
                  <PP_16 medium color={theme.medium_grey}>
                    <a target="_blank" href="https://t.me/ttovarischh">
                      Telegram
                    </a>
                  </PP_16>
                  <PP_16 medium color={theme.medium_grey}>
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/in/ttovarischh/"
                    >
                      LinkedIn
                    </a>
                  </PP_16>
                  <PP_16 medium color={theme.medium_grey}>
                    <a
                      target="_blank"
                      href={
                        currentLanguage == "en"
                          ? "https://drive.google.com/file/d/1CUUQhceAEWkuyIIvOcf509_t-pKz6Rx0/view?usp=sharing"
                          : "https://drive.google.com/file/d/1n44MV-pDMMVsyf5hL8F1B11OuOOJzFxL/view?usp=sharing"
                      }
                    >
                      My resumé
                    </a>
                  </PP_16>
                </FlexBox>
              </FooterUpperRowColumn>
              <FooterUpperRowColumn>
                <PP_24 color={theme.main_grey} medium>
                  By the way
                </PP_24>
                <FlexBox $direction="column" $gap="4px">
                  <PP_16 medium color={theme.medium_grey}>
                    {t("footer.availableHire")}
                  </PP_16>
                  <PP_16 medium color={theme.medium_grey}>
                    {t("footer.based")}
                  </PP_16>
                  <PP_16 medium color={theme.medium_grey}>
                    {t("footer.upd")}
                  </PP_16>
                  <PP_16 medium color={theme.medium_grey}>
                    Made w/ ⚛React
                  </PP_16>
                </FlexBox>
              </FooterUpperRowColumn>
            </FooterUpperRowColumns>
          </FlexBox>
          <FooterLogoRow>
            <A_Icon iconName="p" className="p" />
            <A_Icon iconName="dot" className="dot" />
            <A_Icon iconName="s" className="s" />
            <FooterDotsRow>
              <A_Icon iconName="dot" className="dot" />
              <A_Icon iconName="dot" className="dot" />
              <A_Icon iconName="dot" className="dot" />
            </FooterDotsRow>
          </FooterLogoRow>
        </FooterWrapper>
      </FullFooterWrapper>
    );
  }
};

export default M_Footer;
