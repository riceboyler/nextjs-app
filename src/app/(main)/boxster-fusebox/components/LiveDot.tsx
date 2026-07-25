import { Box, type BoxProps } from "styled-system/jsx";
import type { FuseLiveState } from "@/data/fuseboxData";

type Props = BoxProps & {
	live: FuseLiveState;
};

const LIVE_COLOR: Record<"constant" | "switched", string> = {
	constant: "#b3131c",
	switched: "#1a7a3c",
};

const LIVE_TITLE: Record<"constant" | "switched", string> = {
	constant: "Constant Live",
	switched: "Switched Live",
};

/** Small colored dot mirroring the constant/switched-live marking on the printed fuse chart. */
export const LiveDot = ({ live, ...rest }: Props) => {
	return (
		<Box
			{...rest}
			w="8px"
			h="8px"
			borderRadius="full"
			title={live ? LIVE_TITLE[live] : "Not marked"}
			style={{ backgroundColor: live ? LIVE_COLOR[live] : "transparent" }}
		/>
	);
};
