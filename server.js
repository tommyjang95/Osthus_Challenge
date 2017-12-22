var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var products = [
	{
		id:1,
		name: 'Jon Snow',
		email: 'jon.snow@osthus.com',
		phone: '001-001-0001',
		authorizationRoles: 'Team Lead',
		actionsHistory: 'Deployed,Pushed,Pushed,Pulled',
		lastLogin: '10/28/2017'
	},

	{
		id:2,
		name: 'Daenerys Targaryen',
		email: 'daenerys.targaryen@osthus.com',
		phone: '002-002-0002',
		authorizationRoles: 'Team Lead',
		actionsHistory: 'Pulled,Pushed,Deployed',
		lastLogin: '11/19/2005'
	},

	{
		id:3,
		name: 'Tyrion Lannister',
		email: 'tyrion.lannister@osthus.com',
		phone: '003-003-0003',
		authorizationRoles: 'Team Member',
		actionsHistory: 'Pushed,Pushed,Pushed',
		lastLogin: '12/01/2009'
	},

	{
		id:4,
		name: 'Jaime Lannister',
		email: 'jaime.lannister@osthus.com',
		phone: '004-004-0004',
		authorizationRoles: 'Team Member',
		actionsHistory: 'Pulled,Deployed,Pulled',
		lastLogin: '05/29/2014'
	},

	{
		id:5,
		name: 'Arya Stark',
		email: 'arya.stark@osthus.com',
		phone: '005-005-0005',
		authorizationRoles: 'Stakeholder',
		actionsHistory: 'Pushed,Pushed,Pulled',
		lastLogin: '09/21/2012'
	},

	{
		id:6,
		name: 'Cersei Lannister',
		email: 'cersei.lannister@osthus.com',
		phone: '006-006-0006',
		authorizationRoles: 'Team Lead',
		actionsHistory: 'Deployed,Pushed,Pulled',
		lastLogin: '03/28/2016'
	},
	{
		id:7,
		name: 'Theon Greyjoy',
		email: 'theon.greyjoy@osthus.com',
		phone: '007-007-0007',
		authorizationRoles: 'Team Member',
		actionsHistory: 'Deployed,Pushed',
		lastLogin: '04/15/2012'
	},
	{
		id:8,
		name: 'Sandor Clegane',
		email: 'sandor.clegane@osthus.com',
		phone: '008-008-0008',
		authorizationRoles: 'Team Member',
		actionsHistory: 'Pulled',
		lastLogin: '08/10/2005'
	},
	{
		id:9,
		name: 'Gregor Clegane',
		email: 'gregor.clegane@osthus.com',
		phone: '009-009-0009',
		authorizationRoles: 'Team Member',
		actionsHistory: 'Pushed,Pushed',
		lastLogin: '02/22/2002'
	},
	{
		id:10,
		name: 'Samwell Tarly',
		email: 'samwell.tarly@osthus.com',
		phone: '010-010-0010',
		authorizationRoles: 'Product Owner',
		actionsHistory: 'Pulled,Pushed',
		lastLogin: '06/09/2015'
	},
	{
		id:11,
		name: 'Davos Seaworth',
		email: 'davos.seaworth@osthus.com',
		phone: '011-011-0011',
		authorizationRoles: 'Team Member',
		actionsHistory: 'Pushed,Pulled',
		lastLogin: '07/11/2007'
	},
	{
		id:12,
		name: 'Bran Stark',
		email: 'bran.stark@othus.com',
		phone: '012-012-0012',
		authorizationRoles: 'Stakeholder',
		actionsHistory: 'Deployed',
		lastLogin: '08/25/2017'
	},



];
var currentId = 12;

var PORT = process.env.PORT || 3000;

app.use(express.static(__dirname));
app.use(bodyParser.json());

app.get('/products', function(req, res) {
	res.send({ products: products});
});

app.post('/products', function(req, res) {
	var productName = req.body.name;
	var productEmail = req.body.email;
	var productPhone = req.body.phone;
	var productRoles = req.body.roles;
	var productHistory = req.body.history;
	var productLogin = req.body.login;
	currentId++;

	products.push ({
		id: currentId,
		name: productName,
		email: productEmail,
		phone: productPhone,
		authorizationRoles: productRoles,
		actionsHistory: productHistory,
		lastLogin: productLogin
	});
	res.send('Row Created');
});

app.put('/products/:id', function(req, res) {
	var id = req.params.id;
	var newName = req.body.newName
	var newEmail = req.body.newEmail
	var newPhone = req.body.newPhone
	var newRoles = req.body.newRoles
	var newHistory = req.body.newHistory
	var newLogin = req.body.newLogin

	var found = false; 
	products.forEach(function(product, index) {
		//error
		if (!found && product.id === Number(id)) {
			product.name = newName;
			product.email = newEmail;
			product.phone = newPhone;
			product.authorizationRoles = newRoles;
			product.actionsHistory = newHistory;
			product.lastLogin = newLogin;
		}
	});
	res.send('Updated');
})

app.delete('/products/:id', function(req, res) {
	var id = req.params.id;
	var found = false;

	products.forEach(function(product, index) {
		if (!found && product.id === Number(id)) {
			products.splice(index,1);
		}
	});
	res.send('Deleted');
});

app.listen(PORT, function() {
	console.log('Server listening on '+ PORT);
});




