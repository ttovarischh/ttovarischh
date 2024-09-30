import React from "react";
import styled from "styled-components";
import { FlexBox, PP_80, PP_14, PP_32, PP_20 } from "../Common";
import A_LanguageSwitcher from "../Atoms/A_LanguageSwitcher";
import A_LogoNavButton from "../Atoms/A_LogoNavButton";
import A_TimeDisplay from "../Atoms/A_TimeDisplay";
import A_NavButtons from "../Atoms/A_NavButtons";
import { Link } from "react-router-dom";
import A_Icon from "../Atoms/A_Icon";

const FooterWrapper = styled(FlexBox)`
  position: relative;
  flex-direction: column;
  width: 100%;
  //   padding: 2.5vw 2.5vw 32px;
  padding: calc(2.5vw - 12px);
  box-sizing: border-box;
  background: #fbf8f3;
  border-radius: 20px 20px 0px 0px;

  ::selection {
    color: white;
    background: black;
  }

  ::-moz-selection {
    color: white;
    background: black;
  }
`;
const FooterUpperRow = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 2fr 1fr 3fr;
  grid-row-gap: 1.04vw;
  width: 100%;
  box-sizing: border-box;
  background: #fbf8f3;
  border-radius: 20px 20px 0px 0px;

  a {
    transition: all 0.5s ease;
    &:hover {
      opacity: 0.5;
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
  margin-top: 160px;

  :nth-child(2) {
    justify-self: right;
    margin-right: 2vw;
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
  margin-top: 32px;
`;

const FooterUpperRowContact = styled.div`
  a {
    text-decoration: underline;
    text-decoration-color: #6b6863;
  }
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
  return (
    <FooterWrapper>
      <FooterUpperRow>
        <FooterUpperRowContact>
          <PP_80 medium color="#212121" lineHeight="88%">
            Fancy a chat?<br></br>Let’s&nbsp;
            <a href="mailto: polinasot@gmail.com">get in touch</a>.
          </PP_80>
        </FooterUpperRowContact>

        <FooterUpperRowColumns>
          <FlexBox $gap="24px" $direction="column">
            <PP_32 color="#212121" medium>
              Site plan
            </PP_32>
            <FlexBox $direction="column" $gap="4px">
              <Link to="/">
                <PP_20 medium color="#6B6863">
                  Home
                </PP_20>
              </Link>
              <Link to="/">
                <PP_20 medium color="#6B6863">
                  Work
                </PP_20>
              </Link>
              <Link to="/">
                <PP_20 medium color="#6B6863">
                  About
                </PP_20>
              </Link>
            </FlexBox>
          </FlexBox>
          <FlexBox $gap="24px" $direction="column">
            <PP_32 color="#212121" medium>
              Follow me
            </PP_32>
            <FlexBox $direction="column" $gap="4px">
              <PP_20 medium color="#6B6863">
                <a href="https://www.behance.net/ttovarischh">Behance</a>
              </PP_20>
              <PP_20 medium color="#6B6863">
                <a href="https://www.are.na/polina-sotnikova-8r-1jefvew0/channels">
                  Are.na
                </a>
              </PP_20>
              <PP_20 medium color="#6B6863">
                <a href="https://www.instagram.com/ttovarischh/">Instagram</a>
              </PP_20>
            </FlexBox>
          </FlexBox>
          <FlexBox $gap="24px" $direction="column">
            <PP_32 color="#212121" medium>
              Contact me
            </PP_32>
            <FlexBox $direction="column" $gap="4px">
              <PP_20 medium color="#6B6863">
                polinasot@gmail.com
              </PP_20>
              <PP_20 medium color="#6B6863">
                <a href="https://t.me/ttovarischh">Telegram</a>
              </PP_20>
              <PP_20 medium color="#6B6863">
                <a href="https://www.linkedin.com/in/ttovarischh/">LinkedIn</a>
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
        <PP_14 medium color="#6B6863">
          © 2024 – Polina Sotnikova
        </PP_14>
        {/* <PP_14 medium color="#6B6863">
          Moscow, Russia
        </PP_14> */}
        <FlexBox $gap="10px">
          <PP_14 medium color="#6B6863">
            Available for hire
          </PP_14>
          <PP_14 medium color="#6B6863">
            •
          </PP_14>
          <PP_14 medium color="#6B6863">
            Resumé
          </PP_14>
        </FlexBox>
        <FlexBox $gap="10px">
          <PP_14 medium color="#6B6863">
            Updated 30.09
          </PP_14>
          <PP_14 medium color="#6B6863">
            •
          </PP_14>
          <PP_14 medium color="#6B6863">
            Homemade w/ ⚛React(TS)
          </PP_14>
        </FlexBox>
      </FooterBottomRow>
    </FooterWrapper>
  );
};

export default M_Footer;
