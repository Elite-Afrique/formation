
const adresse = location.origin + '/backend/public/index.php/';
const url: string = location.origin.includes('formation.elite-afrique.com')? adresse: 'http://127.0.0.1:8000/';
export const environment = {
    production: true,
    urlApi: url
};
