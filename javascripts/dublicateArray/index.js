var arr = [1, 2, 3, 4, 2, 5, 3, 5, 4, 6];
var newArr = [];
// indexOf trả về giá trị index đầu tiên của mảng. Nếu không tìm thấy nó sẽ trả về -1
// Nếu giá trị của newArr không tìm thấy thì sẽ đẩy các giá trị của arr vào
// for (let i = 0; i < arr.length; i++) {
// 	if (newArr.indexOf(arr[i]) === -1) {
// 		newArr.push(arr[i]);
// 	}
// }

var obj = {};
for (let i = 0; i < arr.length; i++) {
	obj[i] = true;
}



console.log(Object.keys(obj));











// var indices = [];
// var array = ['a', 'b', 'a', 'c', 'a', 'd'];
// var element = 'a';
// var idx = array.indexOf(element);
// while (idx != -1) {
// 	indices.push(idx);
	
// 	idx = array.indexOf(element, idx + 1);
// }




