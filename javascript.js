var quotes = [
	'The way to get started is to quit talking and begin doing. -Walt Disney',
	'The pessimist sees difficulty in every opportunity. The optimisty sees the opportunity in every difficulty. - Winston Churchill',
	'Don\'t let yesterday take up too much of today. -Will Rogers'
]

function newQuote() {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
