
$(document).ready(function() {
	$('#search').keyup(function() {
		$.getJSON('products', function(data) {
			var search = $('#search').val();
			var expression = new RegExp(search, 'i');
			var output;

			$.each(data, function(key, val) {
				//if((val.id.search(expression) != -1) || (val.name.search(expression) != -1)) {
					output += "<tr>";
					output += "<td id='"+key+"'>"+val.id+"</td>";
					output += "<td id='"+key+"'>"+val.name+"</td>";
				//};
			});
			$('tbody').html(output);
		});
	});
});


