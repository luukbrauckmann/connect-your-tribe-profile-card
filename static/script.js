const darkSchemePreferred = window.matchMedia('(prefers-color-scheme: dark)').matches

if (darkSchemePreferred) {
	document.documentElement.classList.add('dark')
	document.documentElement.classList.remove('light')
}

addEventListener('click', (event) => {
	const { target } = event

	if (!target.matches('button') || target.id != 'theme-changer') return

	document.documentElement.classList.toggle('dark')
	document.documentElement.classList.toggle('light')
})