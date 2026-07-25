/** A single row identifier in the 997.610.195.05 fuse box (rows A–E). */
export type FuseRowId = "A" | "B" | "C" | "D" | "E";

/** Whether a fuse position is fed by constant (battery) or switched (ignition) power. */
export type FuseLiveState = "constant" | "switched" | null;

/** One fuse or relay position and the circuits it protects. */
export type FuseEntry = {
	row: FuseRowId;
	fuse: string;
	amp: number | null;
	live: FuseLiveState;
	desc: string[];
};

/** Display color for each amperage rating, matching the physical fuse color. */
export type AmpColor = {
	name: string;
	hex: string;
};

export const AMP_COLORS: Record<number, AmpColor> = {
	30: { name: "Green", hex: "#2f9e44" },
	15: { name: "Blue", hex: "#5b8fc7" },
	7.5: { name: "Brown", hex: "#7a4a32" },
	25: { name: "Yellow", hex: "#d99e2b" },
	10: { name: "Red", hex: "#d9432c" },
};

export const FUSE_ROWS: FuseRowId[] = ["A", "B", "C", "D", "E"];

/**
 * Fuse box assignment for reference plate 997.610.195.05 (Germany), Porsche 997 / 987 chassis.
 * Transcribed from a photographed fuse chart: https://www.flickr.com/photos/craigjam/50340800957/
 */
export const fuseboxData: FuseEntry[] = [
	{
		row: "A",
		fuse: "F1",
		amp: 30,
		live: "constant",
		desc: ["Pwr wind. lft dr TRM30"],
	},
	{
		row: "A",
		fuse: "F2",
		amp: 15,
		live: "constant",
		desc: ["Centrl lock. lft dr TRM30"],
	},
	{
		row: "A",
		fuse: "F3",
		amp: 15,
		live: "constant",
		desc: [
			"Rear control unit TRM30",
			"Rear spoiler",
			"Rear lid release",
			"Two-tone horns",
		],
	},
	{
		row: "A",
		fuse: "F4",
		amp: 30,
		live: "constant",
		desc: ["Pwr wind. rt dr TRM30"],
	},
	{
		row: "A",
		fuse: "F5",
		amp: 15,
		live: "constant",
		desc: ["Central lock. rt dr TRM30"],
	},
	{
		row: "A",
		fuse: "F6",
		amp: 15,
		live: "constant",
		desc: [
			"Rear control unit TRM30",
			"Left tail light",
			"Brake light",
			"Rear fog lights",
		],
	},
	{
		row: "A",
		fuse: "F7",
		amp: 15,
		live: "constant",
		desc: ["Rear control unit TRM30", "Right tail light", "Rear fog lights"],
	},
	{
		row: "A",
		fuse: "F8",
		amp: 7.5,
		live: "constant",
		desc: ["12-volt socket"],
	},
	{
		row: "A",
		fuse: "F9",
		amp: 25,
		live: null,
		desc: ["Rear window heater relay (987)"],
	},
	{ row: "A", fuse: "F10", amp: 15, live: null, desc: ["Cigarette lighter"] },

	{
		row: "B",
		fuse: "F1",
		amp: 15,
		live: "constant",
		desc: [
			"Electronic ignition lock",
			"Instrument cluster TRM30",
			"TS weight detect. connector TRM30",
			"Diagnostic socket TRM30",
		],
	},
	{
		row: "B",
		fuse: "F2",
		amp: 7.5,
		live: "constant",
		desc: [
			"Passenger compartment sensor",
			"Passenger compartment sensor, cabrio",
		],
	},
	{
		row: "B",
		fuse: "F3",
		amp: 15,
		live: "constant",
		desc: [
			"Seat adjustment compartment unit TRM30",
			"Memory control unit",
			"Comfort steering column module",
			"Alarm siren",
			"Sport chronograph",
			"Tilt sensor",
		],
	},
	{
		row: "B",
		fuse: "F4",
		amp: 25,
		live: "constant",
		desc: ["Headlight washer"],
	},
	{ row: "B", fuse: "F5", amp: null, live: "constant", desc: ["Empty"] },
	{
		row: "B",
		fuse: "F6",
		amp: 7.5,
		live: "constant",
		desc: [
			"Vehicle electrical system control module TRM30",
			"Tank cap actuator element",
		],
	},
	{ row: "B", fuse: "F7", amp: null, live: null, desc: ["Empty"] },
	{
		row: "B",
		fuse: "F8",
		amp: 7.5,
		live: "constant",
		desc: ["Tiptronic control unit TRM30 (987)"],
	},
	{
		row: "B",
		fuse: "F9",
		amp: 7.5,
		live: null,
		desc: [
			"Telephone control module TRM86S",
			"Tiptronic position switch (997) TRM86S",
		],
	},
	{
		row: "B",
		fuse: "F10",
		amp: 25,
		live: "constant",
		desc: ["Heating / Climatronic TRM30", "Rear window heater"],
	},

	{ row: "C", fuse: "F1", amp: null, live: "switched", desc: ["Empty"] },
	{
		row: "C",
		fuse: "F2",
		amp: 7.5,
		live: "switched",
		desc: [
			"Diagnosis TRM15",
			"Climatronic unit TRM15",
			"PASM control unit TRM15",
			"Refrigerant pressure sensor TRM15",
			"Early clutch switch",
			"E-box mobile phone TRM15",
			"Heated spray jet",
		],
	},
	{
		row: "C",
		fuse: "F3",
		amp: 10,
		live: "switched",
		desc: ["Front end control unit TRM15", "Light switch TRM15"],
	},
	{
		row: "C",
		fuse: "F4",
		amp: 10,
		live: "switched",
		desc: ["Stop light switch"],
	},
	{
		row: "C",
		fuse: "F5",
		amp: 15,
		live: "switched",
		desc: [
			"Tiptronic control unit TRM15",
			"Tiptronic position switch (997) TRM15",
		],
	},
	{
		row: "C",
		fuse: "F6",
		amp: 15,
		live: "switched",
		desc: [
			"Rear window wiper",
			"Non-dazzle interior mirror TRM15",
			"Park assist control unit TRM15",
		],
	},
	{
		row: "C",
		fuse: "F7",
		amp: 7.5,
		live: "switched",
		desc: ["Comfort steering column module TRM15"],
	},
	{
		row: "C",
		fuse: "F8",
		amp: 10,
		live: "switched",
		desc: [
			"PSM control unit",
			"Transducer / accel sensor(s)",
			"Key module TRM15",
		],
	},
	{
		row: "C",
		fuse: "F9",
		amp: 15,
		live: "constant",
		desc: ["PASM control unit TRM30"],
	},
	{
		row: "C",
		fuse: "F10",
		amp: 25,
		live: "constant",
		desc: ["PSM control unit"],
	},

	{ row: "D", fuse: "F1", amp: 25, live: null, desc: ["Fuel pump 1"] },
	{ row: "D", fuse: "F2", amp: null, live: null, desc: ["Empty"] },
	{
		row: "D",
		fuse: "F3",
		amp: 7.5,
		live: "constant",
		desc: ["DME control unit TRM30"],
	},
	{ row: "D", fuse: "F4", amp: null, live: "constant", desc: ["Empty"] },
	{
		row: "D",
		fuse: "F5",
		amp: 25,
		live: null,
		desc: [
			"DME control unit TRM87",
			"DMTL valve",
			"Secondary air pump relay",
			"Engine flush relay",
			"DME control unit TRM87",
			"Intake pipe flap valve (997)",
			"Valve-lift control",
			"Camshaft sensor",
			"Intake pipe changeover valve",
			"Tank vent",
			"Hot film air flow sensor",
			"A/C compressor relay",
			"Tiptronic shut-off valve",
		],
	},
	{
		row: "D",
		fuse: "F6",
		amp: 25,
		live: null,
		desc: [
			"Oxygen sensor / heater, before cat",
			"Oxygen sensor / heater, after cat",
		],
	},
	{
		row: "D",
		fuse: "F7",
		amp: 15,
		live: null,
		desc: [
			"E-box mobile phone TRM30",
			"Ignition coils cyl. 1–6",
			"Injection valves cyl. 1–6",
		],
	},
	{ row: "D", fuse: "F8", amp: null, live: "constant", desc: ["Empty"] },
	{
		row: "D",
		fuse: "F9",
		amp: 10,
		live: "constant",
		desc: [
			"DVD player TRM30",
			"PCM 2.1 TRM30",
			"Telephone control module TRM30",
			"CD changer TRM30",
		],
	},
	{
		row: "D",
		fuse: "F10",
		amp: 25,
		live: "constant",
		desc: [
			"ASK amplifier TRM30",
			"Bose amplifier TRM30",
			"Bose subwoofer TRM30",
		],
	},

	{
		row: "E",
		fuse: "E1",
		amp: 30,
		live: null,
		desc: ["Seat adjustment, left", "Seat memory, left"],
	},
	{
		row: "E",
		fuse: "E2",
		amp: 30,
		live: null,
		desc: ["Seat adjustment, right", "Seat memory, right"],
	},
	{
		row: "E",
		fuse: "E3",
		amp: 30,
		live: null,
		desc: [
			"Sliding roof (coupe)",
			"Electric convertible top (cabrio)",
			"Power window, rear (cabrio)",
		],
	},
	{ row: "E", fuse: "E4", amp: null, live: null, desc: ["Not used"] },
];
