console.log('hello!');
const ipt = document.querySelector('#textBox');
ipt.addEventListener('click', function(event1) {
	console.log(event1);
});

const btn = document.querySelector('#submit-button');
btn.addEventListener('click', function(event2) {
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
document.querySelector('ul').addEventListener('click', clickDelete)
function clickDelete(event) {
  event.target.remove('')
};
