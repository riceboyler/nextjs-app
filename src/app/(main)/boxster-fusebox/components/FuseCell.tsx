import { Box } from "styled-system/jsx";
import type { FuseEntry } from "@/data/fuseboxData";
import { FuseBadge } from "./FuseBadge";
import { LiveDot } from "./LiveDot";

type Props = {
	entry: FuseEntry;
};

const MAX_VISIBLE_DESC_LINES = 5;

/** A single fuse position: its badge, live-state dot, and the circuits it protects. */
export const FuseCell = ({ entry }: Props) => {
	return (
		<Box
			p={3}
			borderRadius="md"
			border="1px solid"
			borderColor="gray.700"
			bg="gray.800"
		>
			<Box mb={2}>
				<FuseBadge fuse={entry.fuse} amp={entry.amp} />
				<LiveDot
					live={entry.live}
					display="inline-block"
					ml={2}
					verticalAlign="middle"
				/>
			</Box>
			{entry.desc.slice(0, MAX_VISIBLE_DESC_LINES).map((line, i) => (
				<Box
					key={`${entry.fuse}-${i}`}
					fontSize="md"
					fontWeight={i === 0 ? "semibold" : "normal"}
					color={i === 0 ? "slate.50" : "gray.400"}
				>
					{line}
				</Box>
			))}
			{entry.desc.length > MAX_VISIBLE_DESC_LINES && (
				<Box fontSize="md" fontStyle="italic" color="gray.500">
					+{entry.desc.length - MAX_VISIBLE_DESC_LINES} more
				</Box>
			)}
		</Box>
	);
};
