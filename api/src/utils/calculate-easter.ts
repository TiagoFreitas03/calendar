/**
 * calcula e retorna a data da páscoa no ano especificado
 * @param year ano para se calcular a data da páscoa
*/
export function calculateEaster(year: number) {
	const c = Math.floor(year / 100)
	const n = year - 19 * Math.floor(year / 19)
	const k = Math.floor((c - 17) / 25)

	let i = c - Math.floor(c / 4) - Math.floor((c - k) / 3) + 19 * n + 15
	i = i - 30 * Math.floor((i / 30))
	i = i - Math.floor(i / 28) * (1 - Math.floor(i / 28) *
		Math.floor(29 / (i + 1)) * Math.floor((21 - n) / 11))

	let j = year + Math.floor(year / 4) + i + 2 - c + Math.floor(c / 4)
	j = j - 7 * Math.floor(j / 7)

	const l = i - j
	const m = 3 + Math.floor((l + 40) / 44)
	const d = l + 28 - 31 * Math.floor(m / 4)

	return new Date(year, m - 1, d)
}
