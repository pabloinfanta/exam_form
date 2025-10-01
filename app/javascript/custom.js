// A $( document ).ready() block.
$( document ).ready(function() {
  var id = 1
	$("#add").click(function() {
		var div1 = document.createElement("div");
		div1.setAttribute("class", "col-md-3 form-group mt-2");

		var div2 = document.createElement("div");
		div2.setAttribute("class", "col-md-2 form-group  mt-2");

		var div3 = document.createElement("div");
		div3.setAttribute("class", "col-md-2 form-group  mt-2");

		var div4 = document.createElement("div");
		div4.setAttribute("class", "col-md-3 form-group  mt-2");

		var div5 = document.createElement("div");
		div5.setAttribute("class", "col-md-2 form-group  mt-2");

		var span01 = document.createElement("span");
		span01.appendChild(document.createTextNode("*"));
		span01.setAttribute("class", "text-danger");

		var span02 = document.createElement("span");
		span02.appendChild(document.createTextNode("*"));
		span02.setAttribute("class", "text-danger");

		var span03 = document.createElement("span");
		span03.appendChild(document.createTextNode("*"));
		span03.setAttribute("class", "text-danger");

		var label_name = document.createElement("label");
		label_name.appendChild(document.createTextNode("Nombre completo"));

		var input_name = document.createElement("INPUT");
		input_name.setAttribute("type", "text");
		input_name.setAttribute("class", "form-control");
		input_name.setAttribute("required", "required");
		input_name.setAttribute("name", "worker_name" + id);

		var label_age = document.createElement("label");
		label_age.appendChild(document.createTextNode("Edad"));

		var input_age = document.createElement("INPUT");
		input_age.setAttribute("type", "number");
		input_age.setAttribute("class", "form-control");
		input_age.setAttribute("name", "worker_age" + id);

		var label_rut = document.createElement("label");
		label_rut.appendChild(document.createTextNode("Rut"));

		var input_rut = document.createElement("INPUT");
		input_rut.setAttribute("type", "text");
		input_rut.setAttribute("class", "form-control");
		input_rut.setAttribute("required", "required");
		input_rut.setAttribute("pattern", "(\\d{1,3}(?:\\d{1,3}){2}-[\\dkK])");
		input_rut.setAttribute("name", "worker_rut" + id);

		var label_position = document.createElement("label");
		label_position.appendChild(document.createTextNode("Cargo"));

		var input_position = document.createElement("INPUT");
		input_position.setAttribute("type", "text");
		input_position.setAttribute("class", "form-control");
		input_position.setAttribute("required", "required");
		input_position.setAttribute("name", "worker_position" + id);

		var label_comment = document.createElement("label");
		label_comment.appendChild(document.createTextNode("Comentario"));

		var input_comment = document.createElement("INPUT");
		input_comment.setAttribute("type", "text");
		input_comment.setAttribute("class", "form-control");
		input_comment.setAttribute("name", "worker_comment" + id);

		var valid1 = document.createElement("div");
		valid1.setAttribute("class", "valid-feedback");
		valid1.appendChild(document.createTextNode("Esta bien"));

		var invalid1 = document.createElement("div");
		invalid1.setAttribute("class", "invalid-feedback");
		invalid1.appendChild(document.createTextNode("Completa este campo"));

		var valid2 = document.createElement("div");
		valid2.setAttribute("class", "valid-feedback");

		var valid3 = document.createElement("div");
		valid3.setAttribute("class", "valid-feedback");
		valid3.appendChild(document.createTextNode("Esta bien"));

		var invalid3 = document.createElement("div");
		invalid3.setAttribute("class", "invalid-feedback");
		invalid3.appendChild(document.createTextNode("Sin puntos y con guión"));

		var valid4 = document.createElement("div");
		valid4.setAttribute("class", "valid-feedback");
		valid4.appendChild(document.createTextNode("Esta bien"));

		var invalid4 = document.createElement("div");
		invalid4.setAttribute("class", "invalid-feedback");
		invalid4.appendChild(document.createTextNode("Completa este campo"));

		var valid5 = document.createElement("div");
		valid5.setAttribute("class", "valid-feedback");

		div1.appendChild(label_name);
		div1.appendChild(span01);
		div1.appendChild(input_name);
		div1.appendChild(valid1);
		div1.appendChild(invalid1);

		div2.appendChild(label_age);
		div2.appendChild(input_age);
		div2.appendChild(valid2);

		div3.appendChild(label_rut);
		div3.appendChild(span02);
		div3.appendChild(input_rut);
		div3.appendChild(valid3);
		div3.appendChild(invalid3);

		div4.appendChild(label_position);
		div4.appendChild(span03);
		div4.appendChild(input_position);
		div4.appendChild(valid4);
		div4.appendChild(invalid4);

		div5.appendChild(label_comment);
		div5.appendChild(input_comment);
		div5.appendChild(valid5);

		$('#workers').append(div1);
		$('#workers').append(div2);
		$('#workers').append(div3);
		$('#workers').append(div4);
		$('#workers').append(div5);
		id = id + 1
	});
	
  $("#remove").click(function() {
		$('#workers > .form-group').slice(-5).remove();
		id = id - 1
	});

	(function () {
		'use strict'

		var forms = document.querySelectorAll('.needs-validation')

		Array.prototype.slice.call(forms)
				.forEach(function (form) {
				form.addEventListener('submit', function (event) {
						if (!form.checkValidity()) {
						event.preventDefault()
						event.stopPropagation()

						}
						document.querySelectorAll("input.form-control:invalid");

						form.classList.add('was-validated')
				}, false)
				})
})()

});