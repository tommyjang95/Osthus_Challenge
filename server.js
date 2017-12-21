var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var products = [
	{
		id:1,
		name: 'laptop'
	},

	{
		id:2,
		name: 'microwave'
	},

	{"name":"Jon Snow",
    "email": "john.snow@osthus.com",
    "phone": "001-001-0001",
    "authorizationRoles": "n/a",
    "actionsHistory": "n/a",
    "lastLogin": "1/1/2017"},

    {"name":"Daenerys Targaryen",
    "email": "daenerys.targaryen@osthus.com",
    "phone": "001-001-0001",
    "authorizationRoles": "n/a",
    "actionsHistory": "n/a",
    "lastLogin": "1/1/2017"},

    {"name":"Tyrion Lannister",
    "email": "tyrion.lannister@osthus.com",
    "phone": "001-001-0001",
    "authorizationRoles": "n/a",
    "actionsHistory": "n/a",
    "lastLogin": "1/1/2017"},

    {"name":"Jaime Lannister",
    "email": "jaime.lannister@osthus.com",
    "phone": "001-001-0001",
    "authorizationRoles": "n/a",
    "actionsHistory": "n/a",
    "lastLogin": "1/1/2017"},

    {"name":"Arya Stark",
    "email": "arya.stark@osthus.com",
    "phone": "001-001-0001",
    "authorizationRoles": "n/a",
    "actionsHistory": "n/a",
    "lastLogin": "1/1/2017"}
];
var currentId = 2;

var PORT = process.env.PORT || 3000;

app.use(express.static(__dirname));
app.use(bodyParser.json());

app.get('/products', function(req, res) {
	res.send({ products: products});
});

app.post('/products', function(req, res) {
	var productName = req.body.name;
	currentId++;

	products.push ({
		id: currentId,
		name: productName
	});
	res.send('Successfully created product!');
});

app.put('/products/:id', function(req, res) {
	var id = req.params.id;
	var newName = req.body.newName
	var found = false; 
	products.forEach(function(product, index) {
		if (!found && product.id === Number(id)) {
			product.name = newName;
		}
	});
	res.send('Successfully created product!');
})

app.delete('/products/:id', function(req, res) {
	var id = req.params.id;
	var found = false;

	products.forEach(function(product, index) {
		if (!found && product.id === Number(id)) {
			products.splice(index,1);
		}
	});
	res.send('Successfully deleted product!');
});

app.listen(PORT, function() {
	console.log('Server listening on '+ PORT);
});




