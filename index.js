var arrS = [];

for (let i = 1; i < 34; i++) {
	arrS[i - 1] = i;
}

var spans = document.querySelectorAll('span');

document.querySelector('button').onclick = function () {
	/*es6 使用 set 集合会自动去除重复*/

	/*获取红球*/

	let set = new Set();

	while (set.size < 6) {
		set.add(getR(arrS, arrS.length));
	}

	/*获取篮球*/

	let set1 = new Set();

	while (set1.size < 1) {
		set1.add(getR(arrS, 16));
	}

	var hong = '';

	var lan = '';

	for (let v of set) {
		hong += v;

		hong += '  ';
	}

	for (let v of set1) {
		lan += v;

		lan += ' ';
	}

	//将内容添加到页面上

	spans[0].innerText = hong;

	spans[1].innerText = lan;
};

// 获取指定范围内的随机数

function getR(arr, al) {
	return arr[Math.floor(Math.random() * al)];
}
