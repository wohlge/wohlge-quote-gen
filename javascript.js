var quotes = [
	'<i>"You have power over your mind - not outside events. Realize this, and you will find strength."</i> ― Marcus Aurelius, Meditations',
	'<i>"The happiness of your life depends upon the quality of your thoughts."<i/> ― Marcus Aurelius, Meditations',
	'<i>"If you are distressed by anything external, the pain is not due to the thing itself, but to your estimate of it; and this you have the power to revoke at any moment."</i> ― Marcus Aurelius, Meditations',
	'<i>"When you arise in the morning think of what a privilege it is to be alive, to think, to enjoy, to love ..."</i> ― Marcus Aurelius, Meditations',
	'<i>"It is not death that a man should fear, but he should fear never beginning to live."</i> ― Marcus Aurelius, Meditations',
	'<i>"Our life is what our thoughts make it."</i> ― Marcus Aurelius, Meditations',
	'<i>"The happiness of your life depends upon the quality of your thoughts."</i> ― Marcus Aurelius, Meditations',
	'<i>"Very little is needed to make a happy life; it is all within yourself in your way of thinking."</i> - Marcus Aurelius, Meditations',
	'<i>"Adopt a mindset of perseverance, convince yourself that you will 100% achieve your goals and never give up. Be critical of yourself but also have faith in yourself."</i> - Concerned Ape'
]

function newQuote() {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
