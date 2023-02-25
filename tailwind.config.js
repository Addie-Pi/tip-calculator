module.exports = {
  content: ['index.html', './src/**/*.{js,jsx,ts,tsx,vue,html}'],
  theme: {
    extend: {
      colors: {
        cyan: {
          darkest: `#3D6666`,
          lightest: `#C5E4E7`,

          text: `#00474B`,
          focus: `#26C2AE`,
          icon: `#9EBBBD`,
          label: `#5E7A7D`,
          'text-field': `#F3F9FA`,
        },
      },
    },
  },
  plugins: [],
}
