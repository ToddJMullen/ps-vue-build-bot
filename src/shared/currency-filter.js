export default function currencyFilter(amt){
	return `$${amt.toFixed(2)}`
}