const ipt = document.querySelector('#textBox');
ipt.addEventListener('click', function(event1) {
	console.log(event1);
});

const btn = document.querySelector('#submit-button');
btn.addEventListener('click', function() {
	const addLi = document.createElement('li');
	const inp = document.querySelector('input');
	addLi.textContent = inp.value;
	if (inp.value !== '') {
		document.querySelector('ul').appendChild(addLi);
		inp.value = '';
	}
});

const rst = document.querySelector('#resetButton')
rst.addEventListener('click', function(clear) {
	document.querySelector('ul').innerHTML = '';
});

const list = document.querySelector('#todo-list'); 
	list.addEventListener('click', function(event){
		const li = event.target.parentNode;
    li.removeChild(event.target);
});




