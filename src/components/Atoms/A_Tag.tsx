import React from "react";
import styled from "styled-components";
import { FlexBox, PP_24, PP_20, PP_18 } from "../Quarks";
import { media } from "../../styles/mediaQueries";
import { useScreenSize } from "../../styles/ScreenSizeContext";

interface TagProps {
  $header?: boolean;
  tagText: string;
  small?: boolean;
  onFilterSelect?: () => void;
  selected?: boolean;
}

const TagWrapper = styled(FlexBox)<{
  $header?: boolean;
  $clickable?: boolean;
  $selected?: boolean;
}>`
  padding: 4px 12px;
  border-radius: var(--tag-border-radius);
  background-color: ${(props) =>
    props.$header
      ? props.theme.tags.headertagbg
      : props.$selected
      ? props.theme.navigation.backtotop
      : props.theme.tags.bg};

  cursor: ${(props) => (props.$clickable ? "pointer" : "inherit")};
  transition: all 0.3s ease;

  &:hover {
    opacity: ${(props) => (props.$clickable ? 0.6 : 1)};
  }

  ${media.tablets} {
    white-space: nowrap;
  }

  ${media.tabletsL} {
    white-space: nowrap;
  }

  ${media.laptop} {
    padding: 8px 12px;
  }
`;

const A_Tag: React.FC<TagProps> = ({
  $header,
  tagText,
  small,
  onFilterSelect,
  selected,
}) => {
  const { isLaptop } = useScreenSize();
  if (isLaptop) {
    return (
      <TagWrapper
        $header={$header}
        $selected={selected}
        $clickable={onFilterSelect !== undefined}
        onClick={onFilterSelect || undefined}
      >
        {small ? <PP_20>{tagText}</PP_20> : <PP_24>{tagText}</PP_24>}
      </TagWrapper>
    );
  } else {
    return (
      <TagWrapper
        $header={$header}
        $selected={selected}
        $clickable={onFilterSelect !== undefined}
        onClick={onFilterSelect || undefined}
      >
        <PP_18>{tagText}</PP_18>
      </TagWrapper>
    );
  }
};

export default A_Tag;
