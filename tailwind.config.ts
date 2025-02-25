/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		backgroundImage: {
  			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  			'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
  			sun: 'url("/hero_circle.svg")',
  			football: 'url("/hero_football.svg")'
  		},
  		boxShadow: {
  			bl2xl: '-10px 10px 5px -5px rgba(0, 0, 0, 0.25)',
  			b2xl: '0px 10px 10px -5px rgba(0, 0, 0, 0.25)',
  			b3xl: '0px 20px 20px -5px rgba(0, 0, 0, 0.25)'
  		},
  		padding: {
  			'70': '70px'
  		},
  		fontSize: {
  			xs: [
  				'14px',
  				'normal'
  			],
  			sm: [
  				'15px',
  				'normal'
  			],
  			md: [
  				'16px',
  				'normal'
  			],
  			xl: [
  				'20px',
  				'normal'
  			],
  			'2xl': [
  				'24px',
  				'normal'
  			],
  			'3xl': [
  				'30px',
  				'normal'
  			],
  			'4xl': [
  				'32px',
  				'normal'
  			],
  			'5xl': [
  				'40px',
  				'normal'
  			],
  			hero: [
  				'64px',
  				'normal'
  			]
  		},
  		fontWeight: {
  			light: 300,
  			normal: 400,
  			semibold: 600,
  			bold: 700
  		},
  		colors: {
  			base: '#FEEFDD',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			tertiary: '#56B7CB',
  			quaternary: '#DF4894',
  			fifth: '#434A42',
  			btnColor: '#A53860',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		screens: {
  			wideplus: '2000px',
  			wide: '1440px',
  			medium: '1225px',
  			smallplus: '1090px',
  			small: '950px',
  			tablet: '835px',
  			extrasmall: '740px',
  			mobileplus: '470px',
  			mobile: '394px'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
