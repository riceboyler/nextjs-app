import { Box, styled } from "styled-system/jsx";
import type { FuseEntry, FuseRowId } from "@/data/fuseboxData";
import { FuseBadge } from "./FuseBadge";
import { LiveDot } from "./LiveDot";

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
			<styled.table width="100%" borderCollapse="collapse">
				<tbody>
					{entries.map((entry, index) => (
						<styled.tr key={entry.fuse}>
							<styled.td
								p={3}
								verticalAlign="top"
								whiteSpace="nowrap"
								fontWeight="bold"
								borderTop={index > 0 ? "1px solid" : "none"}
								borderColor="gray.600"
							>
								<FuseBadge fuse={entry.fuse} amp={entry.amp} />
								<LiveDot
									live={entry.live}
									display="inline-block"
									ml={1}
									verticalAlign="middle"
								/>
							</styled.td>
							<styled.td
								p={3}
								verticalAlign="top"
								fontSize="md"
								borderTop={index > 0 ? "1px solid" : "none"}
								borderColor="gray.600"
							>
								{entry.desc.map((line, i) => (
									<Box
										key={`${entry.fuse}-${i}`}
										fontWeight={i === 0 ? "semibold" : "normal"}
										color={i === 0 ? "slate.50" : "gray.400"}
									>
										{line}
									</Box>
								))}
							</styled.td>
						</styled.tr>
					))}
				</tbody>
			</styled.table>
		</Box>
	);
};
