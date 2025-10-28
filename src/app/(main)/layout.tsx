import type { Metadata } from "next";
import "./globals.css";
import { PermanentMarker, ZenKaku, ZillaSlab } from "../../styles/fonts";
import { css } from "styled-system/css";
import { Container, Center } from "styled-system/jsx";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";

export const metadata: Metadata = {
  title: "riceboyler.com | Personal Website of Jason Clark",
  description:
    "Personal Website of Jason Clark - Software Engineer, Blogger, and Car Enthusiast",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${ZenKaku.variable} ${ZillaSlab.variable} ${PermanentMarker.variable}`}
    >
      <body
        className={css({
          bg: "slate.900",
          color: "slate.50",
        })}
      >
        <Navbar />
        <Container minH="75vh">
          <Center
            className={css({
              fontFamily: "zen",
              fontSize: "2xl",
              fontWeight: "bold",
            })}
          >
            {children}
          </Center>
        </Container>
        <Footer />
      </body>
    </html>
  );
}
