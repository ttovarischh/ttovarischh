import React from "react";
import styled from "styled-components";
import { FlexBox, DJR_128, PP_48, PP_20 } from "../Common";
import A_InfoColumn from "../Atoms/A_InfoColumn";
import A_Button from "../Atoms/A_Button";

interface Link {
  name: string;
  url: string;
}

interface ProjectInfoProps {
  horisontal?: boolean;

  name?: string;

  role?: string;
  organisation?: string;
  status?: string;
  team?: string;

  type?: string;
  timeline?: string;
  deliverables?: string;
  s_description?: string;
  description?: string;

  links?: Link[];
}

const MainInfoWrapper = styled(FlexBox)`
  padding: 166px 2.5vw 32px;
`;

const ProjectInfoWrapper = styled.div`
  display: grid;
  margin: 140px 2.5vw 88px;
  height: 500px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-column-gap: 1.04vw;

  & > div:nth-child(1) {
    grid-column-start: 2;
    max-width: 165px;
  }

  & > div:nth-child(2) {
    grid-column-start: 3;
    grid-column-end: 6;
  }
`;

const MainInfoContent = styled.div`
  display: grid;
  margin-top: 88px;
  grid-template-columns: 1fr 2fr 1fr 2fr;
  grid-column-gap: 1.04vw;

  & > div:nth-child(2) {
    grid-column-start: 3;
  }
`;

const ButtonsWrapper = styled(FlexBox)`
  width: 100%;
`;

const M_ProjectInfo = (props: ProjectInfoProps) => {
  if (props.horisontal) {
    return (
      <MainInfoWrapper>
        <DJR_128>{props.name}</DJR_128>
        <MainInfoContent>
          <A_InfoColumn header="Role" text={props.type} />
          <A_InfoColumn header="Timeline" text={props.timeline} />
          <A_InfoColumn header="Deliverables" text={props.deliverables} />
        </MainInfoContent>
      </MainInfoWrapper>
    );
  } else {
    return (
      <ProjectInfoWrapper>
        <FlexBox $gap="20px">
          <A_InfoColumn header="Role" text={props.role} />
          <A_InfoColumn header="Organisation" text={props.organisation} />
          <A_InfoColumn header="Status" text={props.status} />
          {props.team && <A_InfoColumn header="Status" text={props.team} />}
        </FlexBox>
        <FlexBox $gap="60px">
          <FlexBox $gap="26px">
            <PP_48 lineHeight="100%" medium>
              {props.s_description}
            </PP_48>
            <PP_20>{props.description}</PP_20>
          </FlexBox>
          <ButtonsWrapper $gap="1.04vw">
            {props.links?.map((link, index) => (
              <A_Button
                key={index}
                buttonText={link.name}
                handleButtonClick={() => window.open(link.url, "_blank")}
                fw
              />
            ))}
          </ButtonsWrapper>
        </FlexBox>
      </ProjectInfoWrapper>
    );
  }
};

export default M_ProjectInfo;
