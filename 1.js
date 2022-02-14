let a = 4;
let b = -4;
let c = 1;
let x1, x2;

// считаем дискриминант
let D = b*b - 4*a*c;


// смотрим знак D
if (D > 0) {		//2 корня
	x1 = (-b + Math.sqrt(D)) / 2*a;
	x2 = (-b - Math.sqrt(D)) / 2*a;
	console.log(`x1 = ${x1}`)
	console.log(`x1 = ${x2}`)
}
else if (D == 0) {		//1 корень
	x1 = -b / 2*a;
	console.log(`x1 = ${x1}`)
}
else { //корней нет
	console.log('действительных корней нет')
}
