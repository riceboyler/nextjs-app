import Link from "next/link";
import { Box, VStack } from "styled-system/jsx";

const PlaygroundHome = () => {
  return (
    <Box>
      <Box fontFamily="zilla" fontSize="3xl">
        Playground Index
      </Box>
      <VStack>
        <Box>This area contains various little projects I am working on that aren't apps or sites, they're just me playing around with code to learn.
        </Box>
        <Box as="ul">
          <Box as="li">
            <Link href="/playground/css-techniques-without-js">CSS Techniques without JavaScript</Link>
          </Box>
          <Box as="li">
            <Link href="/playground/file-explorer-test">File Explorer (test from various companies for hiring)</Link>
          </Box>
        </Box>
      </VStack>
    </Box>
  );
};

export default PlaygroundHome;