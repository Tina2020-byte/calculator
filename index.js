
 function item (num) {
 	document.form.textview.value = document.form.textview.value + num;
 }



// function procent (num, pro) {
// 	var result = num * pro;
// 	document.form.textview.value = result ;
// }

function back() {
	var prev = document.form.textview.value;
	document.form.textview.value = prev.substring(0, prev.length -1);
}

function del(num) {
	document.form.textview.value = '';
}

function total(num) {
	var eva = document.form.textview.value;
	if(eva){
		document.form.textview.value = eval(eva);
	}
}