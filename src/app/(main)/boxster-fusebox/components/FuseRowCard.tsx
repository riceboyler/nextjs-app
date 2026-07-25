import { Box, Grid } from "styled-system/jsx";
import type { FuseEntry, FuseRowId } from "@/data/fuseboxData";
import { FuseCell } from "./FuseCell";

type Props = {
	row: FuseRowId;
	entries: FuseEntry[];
};

const ATO_FUSE_ROWS: FuseRowId[] = ["A", "B", "C", "D"];

/** A single fuse-box row (A–E), listing every fuse position and the circuits it protects. */
export const FuseRowCard = ({ row, entries }: Props) => {
	return (
		<Box
			borderRadius="lg"
			border="1px solid"
			borderColor="gray.600"
			overflow="hidden"
		>
			<Box
				px={4}
				py={2}
				fontWeight="semibold"
				fontSize="md"
				bg="gray.800"
				borderBottom="1px solid"
				borderColor="gray.600"
			>
				Row {row}
				{ATO_FUSE_ROWS.includes(row) && " (ATO Fuses)"}
			</Box>
			<Grid
				gridTemplateColumns="repeat(auto-fill, minmax(240px, 1fr))"
				gridAutoRows="1fr"
				gap={3}
				p={3}
			>
				{entries.map((entry) => (
					<FuseCell key={entry.fuse} entry={entry} />
				))}
			</Grid>
		</Box>
	);
};
