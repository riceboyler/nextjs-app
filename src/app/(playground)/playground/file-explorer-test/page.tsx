'use client';
import { useState } from "react";
import { IoCaretDown, IoCaretForward } from "react-icons/io5";
import { LuFile, LuFolder } from "react-icons/lu";
import { Box, HStack, VStack } from "styled-system/jsx";
import { File } from "@/app/(playground)/playground/file-explorer-test/components/File";
import { Folder } from "@/app/(playground)/playground/file-explorer-test/components/Folder";

type Obj = {
  name: string;
  type: 'file' | 'folder',
  children?: Obj[];
};

const objects: Obj[] = [
  {
    name: 'index.js',
    type: 'file'
  },
  {
    name: 'App.js',
    type: 'file',
  },
  {
    name: 'style.scss',
    type: 'file'
  },
  {
    name: 'index.html',
    type: 'file'
  },
  {
    name: 'src',
    type: 'folder',
    children: [{ name: 'Components', type: 'folder' }, { name: 'Hooks', type: 'file' }]
  }
];

const FileExplorerPage = () => {
  const [isOpen, setIsOpen] = useState(true);
  const addFile = () => {

  };

  const mapObject = (obj: Obj) => {
    return obj.type === 'file' ? (
      <File key={obj.name} filename={obj.name} />
    ) : (
      <Folder key={obj.name} name={obj.name}>
        {obj.children?.map((child) => {
          return mapObject(child);
        })}
      </Folder>
    );
  };

  return (
    <Box border="solid 1px white" width="500px" p="4">
      <HStack justifyContent="space-between" alignItems="center" onClick={() => setIsOpen(!isOpen)}>
        <HStack>
          {isOpen ? <IoCaretDown /> : <IoCaretForward />}
          <Box>Files</Box>
        </HStack>
        <HStack>
          <LuFile onClick={() => addFile()} />
          <LuFolder />
        </HStack>
      </HStack>
      {isOpen && (
        <Box borderTop="solid 1px white" py="2">
          <VStack alignItems="flex-start" gap="0">
            {objects.map((obj) => {
              return mapObject(obj);
            })}
          </VStack>
        </Box>
      )}
    </Box>
  );
};

export default FileExplorerPage;
