"use client";
import { useState } from "react";
import { LuFile, LuPencil, LuTrash } from "react-icons/lu";
import { Box, HStack } from "styled-system/jsx";
import { HoverIcon } from "@/app/(playground)/playground/file-explorer-test/components/HoverIcon";

type Props = {
  filename: string;
};

export const File = ({ filename }: Props) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <HStack
      cursor="pointer"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      justifyContent="space-between"
      width="100%">
      <HStack>
        <LuFile color="white" />
        <Box
          _hover={{
            color: "blue.500",
            fontWeight: "bold",
          }}>
          {filename}
        </Box>
      </HStack>
      {isHover && (
        <HStack>
          <HoverIcon icon={LuPencil} />
          <HoverIcon icon={LuTrash} />
        </HStack>
      )}
    </HStack>
  );
};
