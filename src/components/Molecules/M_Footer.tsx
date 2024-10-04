import React from "react";
import styled, { useTheme } from "styled-components";
import { FlexBox, PP_80, PP_14, PP_32, PP_20 } from "../Common";
import { Link } from "react-router-dom";
import A_Icon from "../Atoms/A_Icon";
import { useTranslation } from "react-i18next";
import A_Button from "../Atoms/A_Button";

const FooterWrapper = styled(FlexBox)`
  position: relative;
  flex-direction: column;
  width: 100%;
  padding: calc(2.5vw - 12px);
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
`;

const FooterUpperRow = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 2fr 1fr 3fr;
  grid-row-gap: 1.04vw;
  width: 100%;
  box-sizing: border-box;
  border-radius: 20px 20px 0px 0px;

  @media screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 1) {
    #footerpp80 {
      font-size: 4.5rem !important;
    }
  }
`;

const FooterLogoRow = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-row-gap: 1.04vw;
  width: 100%;
  box-sizing: border-box;
  align-items: baseline;
  margin-top: 14.81vh;

  :nth-child(2) {
    justify-self: right;
  }
  :nth-child(3) {
    grid-column-start: 4;
  }
  :nth-child(4) {
    grid-column-start: 6;
  }
`;

const FooterBottomRow = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 3fr 2fr 1fr;
  grid-row-gap: 1.04vw;
  width: 100%;
  box-sizing: border-box;
  margin-top: 2.96vh;
`;

const FooterUpperRowContact = styled.div`
  display: flex;
  color: ${({ theme }) => theme.main_grey};
  a {
    text-decoration: underline;
    text-decoration-color: ${({ theme }) => theme.medium_grey};
  }
  grid-column-start: 1;
  grid-column-end: 3;
`;

const FooterUpperRowColumns = styled.div`
  grid-column-start: 3;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-row-gap: 1.04vw;
  width: 100%;
  box-sizing: border-box;
`;

const M_Footer = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language as "en" | "ru";
  const theme = useTheme();
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <FlexBox $direction="column" $gap="1.85vh" $offsetTop="10vh">
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
              <a target="_blank" href="mailto: polinasot@gmail.com">
                {t("footer.mainContactLink")}
              </a>
              .
            </PP_80>
          </FooterUpperRowContact>

          <FooterUpperRowColumns>
            <FlexBox $gap="24px" $direction="column">
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
            </FlexBox>
            <FlexBox $gap="24px" $direction="column">
              <PP_32 color={theme.main_grey} medium>
                {t("footer.followMe")}
              </PP_32>
              <FlexBox $direction="column" $gap="4px">
                <PP_20 medium color={theme.medium_grey}>
                  <a target="_blank" href="https://www.behance.net/ttovarischh">
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
            </FlexBox>
            <FlexBox $gap="24px" $direction="column">
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
            </FlexBox>
          </FooterUpperRowColumns>
        </FooterUpperRow>
        <FooterLogoRow>
          <A_Icon iconName="p" />
          <A_Icon iconName="dot" />
          <A_Icon iconName="s" />
          <FlexBox $justifyContent="space-between">
            <A_Icon iconName="dot" />
            <A_Icon iconName="dot" />
            <A_Icon iconName="dot" />
          </FlexBox>
        </FooterLogoRow>
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
            <PP_14 medium color={theme.medium_grey}>
              {t("footer.upd")}
            </PP_14>
            <PP_14 medium color={theme.medium_grey}>
              •
            </PP_14>
            <PP_14 medium color={theme.medium_grey}>
              {t("footer.made")}
            </PP_14>
          </FlexBox>
        </FooterBottomRow>
      </FooterWrapper>
    </FlexBox>
  );
};

export default M_Footer;
