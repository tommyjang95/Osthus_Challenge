$(function() {
	// GET/READ functionalities
	$('#get-button').on('click', function(){
		$.ajax({
			url: '/products',
			contentType: 'application/json',
			success: function(response) {
				var tbodyEl = $('tbody');

				tbodyEl.html('');

				response.products.forEach(function(product) {
					tbodyEl.append('\
						<tr>\
                            <td class="id">' + product.id + '</td>\
                            <td><input type="text" class="name" value="' + product.name + '"></td>\
                            <td><input type="text" class="email" value="' + product.email + '"></td>\
                            <td><input type="text" class="phone" value="' + product.phone + '"></td>\
                            <td><input type="text" class="authorizationRoles" value="' + product.authorizationRoles + '"></td>\
                            <td><input type="text" class="actionsHistory" value="' + product.actionsHistory + '"></td>\
                            <td><input type="text" class="lastLogin" value="' + product.lastLogin + '"></td>\
                            <td>\
                                <button class="update-button">Edit</button>\
                                <button class="delete-button">Delete</button>\
                            </td>\
                        </tr>\
					')
				});
			}	
		});
	});

	// CREATE/POST functionalities

	$('#create-form').on('submit', function(event) {
		event.preventDefault();

		var createInput = $('#create-input');

		$.ajax({
			url: '/products',
			method: 'POST',
			contentType: 'application/json',
			//data: JSON.stringify({ name: createInput.val() }),
			success: function(response) {
				console.log(response);
				createInput.val('');
				$('#get-button').click();
			}
		});
	});

	// UPDATE/PUT functionalities

	$('table').on('click', '.update-button', function() {
		var rowEl = $(this).closest('tr');
		var id = rowEl.find('.id').text();
		var newName = rowEl.find('.name').val();
		var newEmail = rowEl.find('.email').val();
		var newPhone = rowEl.find('.phone').val();
		var newRoles = rowEl.find('.authorizationRoles').val();
		var newHistory = rowEl.find('.actionsHistory').val();
		var newLogin = rowEl.find('.lastLogin').val();

		$.ajax({
			url: '/products/' + id,
			method: 'PUT',
			contentType: 'application/json',
			data: JSON.stringify({ newName: newName, newEmail: newEmail, newPhone: newPhone,
									newRoles: newRoles, newHistory: newHistory, newLogin: newLogin }),
			success: function(response) {
				console.log(response);
				$('#get-button').click();
			}
		});
	});


	// DELETE functionality

	$('table').on('click', '.delete-button', function() {
		var rowEl = $(this).closest('tr');
		var id = rowEl.find('.id').text();

		$.ajax({
			url: '/products/' + id,
			method: 'DELETE',
			contentType: 'application/json',
			success: function(response) {
				console.log(response);
				$('#get-button').click();
			}
		});
	});





});








