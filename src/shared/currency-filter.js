export default function currencyFilter(amt, sym){
	return `${sym}${amt.toFixed(2)}`
}