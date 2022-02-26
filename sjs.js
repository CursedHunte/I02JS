let students = []
let id_currect = 0

function load_from_site() {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'http://217.71.129.139:4035/students.php');
	xhr.send();
	xhr.onload = function() {
	 if (xhr.status !=200) {
	  alert ('Ошибка ${xhr.status}: ${xhr.statusText}');
	 }
	 else {
		 students = JSON.parse(xhr.responseText)['response']
	 }
	};
	xhr.onerror = function() {
	  alert("Запрос не удался");
	};
}

function load_all() {
	let table = document.getElementById('tbl_all')
	for (let i = 0; i < students.length; i++) {
		let id = students[i].id
		let name = students[i].name
		let surname = students[i].surname
		
		let tr = document.createElement('tr')
		let td1 = document.createElement('td')
		let td2 = document.createElement('td')
		let td3 = document.createElement('td')
		
		// запишем данные в ячейки
		td1.textContent = id
		td2.textContent = name
		td3.textContent = surname
		
		// вставим ячейки в строку
		tr.appendChild(td1);
		tr.appendChild(td2);
		tr.appendChild(td3);
		
		// вставим строку в таблицу
		table.appendChild(tr)
	}
}
function load_student(id) {
	let head = document.getElementById('zagolovok')
	head.textContent = 'Информация о студенте № ' + students[id].id
	document.getElementById('name').textContent = students[id].name
	document.getElementById('surname').textContent = students[id].surname
	document.getElementById('scores').textContent = students[id].scores
	for (let i = 0; i < students[id].scores.length; i++) {
		console.log (students[id].scores[i])
	}
	let average_score = students[id].scores.reduce((sum, current) => sum + current , 0);
	average_score = average_score / 5
	document.getElementById('average_score').textContent = average_score
}

function next() {
	id_currect++
	if (id_currect > 0) document.getElementById('btn_prev').disabled = false
	if (id_currect === students.length-1) {
		document.getElementById('btn_next').disabled = true
	}
	load_student(id_currect)
}
function prev() {
	id_currect--
	if (id_currect == 0) document.getElementById('btn_prev').disabled = true
	if (id_currect < students.length) { document.getElementById('btn_next').disabled = false}
	load_student(id_currect)
}