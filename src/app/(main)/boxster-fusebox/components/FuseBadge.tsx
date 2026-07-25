import { styled } from "styled-system/jsx";
import { AMP_COLORS } from "@/data/fuseboxData";

type Props = {
	fuse: string;
	amp: number | null;
};

/** Fuse ID badge, colored and labeled with its physical amperage rating (e.g. "F1 (30A)"). */
export const FuseBadge = ({ fuse, amp }: Props) => {
	const color = amp !== null ? AMP_COLORS[amp] : undefined;

	return (
		<styled.span
			display="inline-block"
			fontSize="md"
			fontWeight="bold"
			px={2}
			py="3px"
			borderRadius="sm"
			color={color ? "white" : "gray.400"}
			bg={color ? undefined : "gray.700"}
			style={color ? { backgroundColor: color.hex } : undefined}
		>
			{color ? `${fuse} (${amp}A)` : fuse}
		</styled.span>
	);
};
