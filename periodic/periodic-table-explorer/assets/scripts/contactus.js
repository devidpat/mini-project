function storeData() {
	const name = document.getElementById('name');
	const email = document.getElementById('email');

	localStorage.setItem(
		'data',
		JSON.stringify({ name: name.value, email: email.value }),
	);
}
