const { GoogleSpreadsheet } = require('google-spreadsheet');

const creds = require('./client_secret.json');

async function accessSpreadsheet() {
	const doc = new GoogleSpreadsheet('1F6BvjBRKMf6cVTzrb3O-4uORjnhHN0I6DC9jkuxQibo');
	await doc.useServiceAccountAuth(creds);
	await doc.loadInfo();
	const sheet = doc.sheetsByIndex[0];
	console.log(`Title: ${sheet.title}, Rows: ${sheet.rowCount} `);
}

accessSpreadsheet();
