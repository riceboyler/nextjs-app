import type { Metadata } from "next";
import { Stack, styled } from "styled-system/jsx";
import ContentBox from "@/components/ContentBox";
import { Heading, Text } from "@/components/Typography";
import { FuseboxExplorer } from "./components";

export const metadata: Metadata = {
	title:
		"Porsche Boxster (987.1) Fuse Box Assignment — 997.610.195.05 | riceboyler.com",
	description:
		"Searchable fuse box assignment reference for reference plate 997.610.195.05 (Porsche 997 / 987 chassis).",
};

const BoxsterFusebox = () => {
	return (
		<Stack gap={4} width="100%">
			<ContentBox>
				<Heading fontSize="3xl">
					Porsche Boxster (987.1) Fuse Box Assignment
				</Heading>
				<Text fontSize="sm" color="gray.400">
					Reference plate 997.610.195.05 (Germany) — Porsche 997 / 987 chassis.
					Transcribed from a{" "}
					<styled.a
						href="https://www.flickr.com/photos/craigjam/50340800957/"
						target="_blank"
						rel="noopener"
						textDecoration="underline"
					>
						photographed fuse chart
					</styled.a>
					.
				</Text>
			</ContentBox>

			<ContentBox>
				<FuseboxExplorer />
			</ContentBox>

			<ContentBox>
				<Text fontSize="sm" color="gray.400">
					Row A–D fuse positions correspond to the physical fuse box slots 1–10
					shown on the printed diagram; amperage is read directly off each fuse
					and colored to match. The small dot next to each fuse ID mirrors the
					red/green dot printed above that slot (Constant Live / Switched Live);
					a blank dot means the source diagram didn&apos;t mark one. Row E
					covers four additional relay/module positions (E1–E4) separate from
					the main F-numbered rows. Positions marked &quot;Empty&quot; are
					unpopulated slots (no fuse printed in the source diagram). Verify
					against the vehicle before use for repair work.
				</Text>
			</ContentBox>
		</Stack>
	);
};

export default BoxsterFusebox;
