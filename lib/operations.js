// For a list of required and optional body or path parameters for resources please see official docs:
// --> https://advertising.amazon.com/API/docs/en-us/

const {readdirSync} = require('fs');
const path = require('path');

module.exports = {
	...readdirSync(__dirname + '/resources').reduce((ops, op) => {
		if (path.extname(op) === '.js'){
			return Object.assign(ops, {
				...require('./resources/' + op)
			});
		}
		return ops;
	}, {})
};