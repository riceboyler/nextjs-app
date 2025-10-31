import type { IconType } from "react-icons";
import { styled } from "styled-system/jsx";

type Props = {
  icon: IconType;
  onClick?: () => void;
};

export const HoverIcon = ({ icon, onClick }: Props) => {
  const StyledIcon = styled(icon);
  return (
    <StyledIcon
      _hover={{
        color: "blue.500",
        fontWeight: 'bold'
      }}
      onClick={() => onClick?.()}
    />
  );
};
