"use client";
import { useState } from "react";
import {
  LuFilePlus,
  LuFolder,
  LuFolderOpen,
  LuFolderPlus,
  LuPencil,
  LuTrash,
} from "react-icons/lu";
import { Box, HStack } from "styled-system/jsx";
import { HoverIcon } from "@/app/(playground)/playground/file-explorer-test/components/HoverIcon";

type Props = {
  name: string;
  children?: React.ReactNode;
};

const hoverProps = {
  color: "blue.500",
  fontWeight: "bold",
};

export const Folder = ({ name, children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHover, setIsHover] = useState(false);
  return (
    <Box
      cursor="pointer"
      width="100%">
      <HStack
        width="100%"
        justifyContent="space-between"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}>
        <HStack
          onClick={() => setIsOpen(!isOpen)}
          _hover={hoverProps}>
          {isOpen ? <LuFolderOpen /> : <LuFolder />}
          <Box>{name}</Box>
        </HStack>
        {isHover && (
          <HStack ml="auto">
            <HoverIcon icon={LuPencil} />
            <HoverIcon icon={LuFilePlus} />
            <HoverIcon icon={LuFolderPlus} />
            <HoverIcon icon={LuTrash} />
          </HStack>
        )}
      </HStack>
      {isOpen && children ? <Box pl="4">{children}</Box> : null}
    </Box>
  );
};
