import type { Theme as MindElixirTheme } from 'mind-elixir';

/** Common spacing and layout configuration shared by all themes. */
const commonSpacing = {
	'--node-gap-x': '48px',
	'--node-gap-y': '16px',
	'--main-gap-x': '24px',
	'--main-gap-y': '32px',
	'--root-radius': '0.625rem',
	'--main-radius': '0.5rem',
	'--topic-padding': '8px 16px',
	'--map-padding': '48px'
};

function createTheme(
	name: string,
	type: 'light' | 'dark',
	colors: {
		mainColor: string;
		mainBgcolor: string;
		color: string;
		bgcolor: string;
		selected: string;
		accentColor: string;
		rootColor: string;
		rootBgcolor: string;
		rootBorderColor: string;
		panelColor: string;
		panelBgcolor: string;
		panelBorderColor: string;
	},
	palette: string[]
): MindElixirTheme {
	return {
		name,
		type,
		palette,
		cssVar: {
			...commonSpacing,
			'--main-color': colors.mainColor,
			'--main-bgcolor': colors.mainBgcolor,
			'--main-bgcolor-transparent': `${colors.mainBgcolor.replace(')', ' / 95%)')}`,
			'--color': colors.color,
			'--bgcolor': colors.bgcolor,
			'--selected': colors.selected,
			'--accent-color': colors.accentColor,
			'--root-color': colors.rootColor,
			'--root-bgcolor': colors.rootBgcolor,
			'--root-border-color': colors.rootBorderColor,
			'--panel-color': colors.panelColor,
			'--panel-bgcolor': colors.panelBgcolor,
			'--panel-border-color': colors.panelBorderColor
		}
	};
}

const lightColors = {
	mainColor: 'oklch(0.145 0 0)', // foreground
	mainBgcolor: 'oklch(1 0 0)', // background (white)
	color: 'oklch(0.145 0 0)', // foreground
	bgcolor: 'oklch(1 0 0)', // card background
	selected: 'oklch(0.205 0 0)', // primary
	rootColor: 'oklch(0.985 0 0)', // primary-foreground
	rootBgcolor: 'oklch(0.205 0 0)', // primary
	rootBorderColor: 'oklch(0.205 0 0)', // primary
	panelColor: 'oklch(0.145 0 0)', // foreground
	panelBgcolor: 'oklch(1 0 0)', // popover
	panelBorderColor: 'oklch(0.922 0 0)' // border
};

const darkColors = {
	mainColor: 'oklch(0.985 0 0)', // foreground
	mainBgcolor: 'oklch(0.145 0 0)', // background (dark)
	color: 'oklch(0.985 0 0)', // foreground
	bgcolor: 'oklch(0.205 0 0)', // card background
	selected: 'oklch(0.922 0 0)', // primary
	rootColor: 'oklch(0.205 0 0)', // primary-foreground
	rootBgcolor: 'oklch(0.922 0 0)', // primary
	rootBorderColor: 'oklch(0.922 0 0)', // primary
	panelColor: 'oklch(0.985 0 0)', // foreground
	panelBgcolor: 'oklch(0.205 0 0)', // popover
	panelBorderColor: 'oklch(1 0 0 / 10%)' // border
};

const lightTheme: MindElixirTheme = createTheme(
	'shadcn-light',
	'light',
	{
		...lightColors,
		accentColor: 'oklch(0.646 0.222 41.116)' // chart-1 (vibrant)
	},
	[
		'oklch(0.646 0.222 41.116)', // chart-1: vibrant orange
		'oklch(0.6 0.118 184.704)', // chart-2: teal
		'oklch(0.398 0.07 227.392)', // chart-3: blue
		'oklch(0.828 0.189 84.429)', // chart-4: yellow-green
		'oklch(0.769 0.188 70.08)', // chart-5: warm yellow
		'oklch(0.488 0.243 264.376)', // purple
		'oklch(0.696 0.17 162.48)' // mint
	]
);

const darkTheme: MindElixirTheme = createTheme(
	'shadcn-dark',
	'dark',
	{
		...darkColors,
		accentColor: 'oklch(0.488 0.243 264.376)' // chart-1 (purple)
	},
	[
		'oklch(0.488 0.243 264.376)', // chart-1: purple
		'oklch(0.696 0.17 162.48)', // chart-2: mint
		'oklch(0.769 0.188 70.08)', // chart-3: warm yellow
		'oklch(0.627 0.265 303.9)', // chart-4: pink
		'oklch(0.645 0.246 16.439)', // chart-5: coral
		'oklch(0.646 0.222 41.116)', // orange
		'oklch(0.6 0.118 184.704)' // teal
	]
);

const lightThemeMonochrome: MindElixirTheme = createTheme(
	'shadcn-light-mono',
	'light',
	{
		...lightColors,
		accentColor: 'oklch(0.205 0 0)' // primary
	},
	['oklch(0.205 0 0)']
);

const darkThemeMonochrome: MindElixirTheme = createTheme(
	'shadcn-dark-mono',
	'dark',
	{
		...darkColors,
		accentColor: 'oklch(0.922 0 0)' // primary
	},
	['oklch(0.922 0 0)']
);

/** Resolve the shadcn-styled Mind Elixir theme. */
export function getTheme(isDark: boolean, isMonochrome: boolean): MindElixirTheme {
	if (isDark) {
		return isMonochrome ? darkThemeMonochrome : darkTheme;
	}
	return isMonochrome ? lightThemeMonochrome : lightTheme;
}
