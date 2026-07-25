"use client";

import { useMemo, useState } from "react";
import {
	Box,
	Flex,
	Grid,
	HStack,
	Stack,
	styled,
	Wrap,
} from "styled-system/jsx";
import {
	AMP_COLORS,
	FUSE_ROWS,
	type FuseEntry,
	type FuseRowId,
	fuseboxData,
} from "@/data/fuseboxData";
import { FuseRowCard } from "./FuseRowCard";
import { LiveDot } from "./LiveDot";

type RowFilter = "All" | FuseRowId;

const ROW_FILTERS: RowFilter[] = ["All", ...FUSE_ROWS];

const AMP_LEGEND_ENTRIES = Object.entries(AMP_COLORS)
	.map(([amp, color]) => [Number(amp), color] as const)
	.sort(([a], [b]) => a - b);

/** Groups fuseboxData by row, applying the active row filter and search query. */
const useFilteredRows = (query: string, activeRow: RowFilter) => {
	return useMemo(() => {
		const q = query.trim().toLowerCase();
		const groups = new Map<FuseRowId, FuseEntry[]>();

		fuseboxData.forEach((entry) => {
			if (activeRow !== "All" && entry.row !== activeRow) return;
			const haystack = `${entry.fuse} ${entry.desc.join(" ")}`.toLowerCase();
			if (q && !haystack.includes(q)) return;

			const rowEntries = groups.get(entry.row) ?? [];
			rowEntries.push(entry);
			groups.set(entry.row, rowEntries);
		});

		return Array.from(groups.entries()).sort(([a], [b]) => a.localeCompare(b));
	}, [query, activeRow]);
};

/** Interactive fuse box reference: searchable, filterable by row, grouped by physical row. */
export const FuseboxExplorer = () => {
	const [query, setQuery] = useState("");
	const [activeRow, setActiveRow] = useState<RowFilter>("All");
	const groupedRows = useFilteredRows(query, activeRow);

	return (
		<Stack gap={4}>
			<Box
				position="relative"
				borderRadius="lg"
				border="1px solid"
				borderColor="gray.600"
				p={4}
				pt={6}
			>
				<styled.p
					position="absolute"
					top="0"
					left="20px"
					transform="translateY(-50%)"
					fontFamily="zilla"
					fontSize="md"
					fontWeight="bold"
					textTransform="uppercase"
					letterSpacing="wide"
					color="gray.300"
					bg="gray.900"
					borderRadius="md"
					px={3}
					py={1}
				>
					Key
				</styled.p>
				<Flex
					direction={{ base: "column", md: "row" }}
					gap={{ base: 4, md: 12 }}
				>
					<Stack gap={2} fontFamily="zilla">
						<styled.p fontSize="md" fontWeight="bold" color="gray.300">
							Slot Live Status
						</styled.p>
						<Wrap gap={5} fontSize="md" color="gray.400" rowGap={2}>
							<HStack gap={2}>
								<LiveDot live="constant" />
								<span>Constant</span>
							</HStack>
							<HStack gap={2}>
								<LiveDot live="switched" />
								<span>Switched</span>
							</HStack>
						</Wrap>
					</Stack>

					<Stack gap={2} fontFamily="zilla">
						<styled.p fontSize="md" fontWeight="bold" color="gray.300">
							Fuse Amperages
						</styled.p>
						<Wrap gap={5} fontSize="md" color="gray.400" rowGap={2}>
							{AMP_LEGEND_ENTRIES.map(([amp, color]) => (
								<HStack gap={2} key={amp}>
									<Box
										w="9px"
										h="9px"
										borderRadius="full"
										style={{ backgroundColor: color.hex }}
									/>
									<span>
										{color.name} — {amp}A
									</span>
								</HStack>
							))}
						</Wrap>
					</Stack>
				</Flex>
			</Box>

			<styled.input
				type="text"
				placeholder='Search fuse number or circuit (e.g. "F5", "tail light", "DME")…'
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				w="100%"
				p={3}
				borderRadius="md"
				border="1px solid"
				borderColor="gray.600"
				bg="gray.800"
				color="slate.50"
				fontSize="md"
			/>

			<HStack gap={2} flexWrap="wrap">
				{ROW_FILTERS.map((row) => (
					<styled.button
						key={row}
						type="button"
						onClick={() => setActiveRow(row)}
						px={3}
						py="6px"
						borderRadius="full"
						border="1px solid"
						borderColor={activeRow === row ? "slate.50" : "gray.600"}
						bg={activeRow === row ? "slate.50" : "gray.800"}
						color={activeRow === row ? "gray.900" : "gray.400"}
						fontSize="md"
						cursor="pointer"
					>
						{row === "All" ? "All rows" : `Row ${row}`}
					</styled.button>
				))}
			</HStack>

			{groupedRows.length === 0 ? (
				<Box
					textAlign="center"
					color="gray.400"
					fontSize="md"
					p={8}
					borderRadius="lg"
					border="1px solid"
					borderColor="gray.600"
				>
					No matches.
				</Box>
			) : (
				<Grid
					gridTemplateColumns={{
						base: "1fr",
						md: "repeat(2, 1fr)",
						xl: "repeat(3, 1fr)",
					}}
					gap={4}
					alignItems="start"
				>
					{groupedRows.map(([row, entries]) => (
						<FuseRowCard key={row} row={row} entries={entries} />
					))}
				</Grid>
			)}
		</Stack>
	);
};
