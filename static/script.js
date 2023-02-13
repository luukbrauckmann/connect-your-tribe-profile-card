const darkSchemePreferred = window.matchMedia('(prefers-color-scheme: dark)').matches

if (darkSchemePreferred) {
	document.documentElement.classList.add('dark-scheme')
	document.documentElement.classList.remove('light-scheme')
}

addEventListener('click', (event) => {
	const { target } = event

	if (!target.matches('button') || target.id != 'scheme-changer') return

	document.documentElement.classList.toggle('dark-scheme')
	document.documentElement.classList.toggle('light-scheme')
})