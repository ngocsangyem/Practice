import xinchao from './xinchao';
import 'bootstrap/dist/css/bootstrap.min.css'

// console.log(hello('Sang'))

var btn = document.querySelector('.btn');

var btn = document.getElementsByTagName('button')[0];
btn.addEventListener("click", () => { // Khi click button
	import('./assets/xinchao.css').then(() => { // chúng ta sẽ import xinchao.css vào
		xinchao('Sang');
	});
});