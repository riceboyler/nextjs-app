import { Box } from "styled-system/jsx";
import "@/app/(main)/globals.css";

export default function PlaygroundLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Box backgroundColor="black" color="white" minHeight="100vh" minWidth="100vw">
          {children}
        </Box>
      </body>

    </html>
  );
}
