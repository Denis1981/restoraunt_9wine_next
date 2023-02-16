const API_URL = 'http://127.0.0.1:8000/api/v1'
//страницы
const API_URL_ARTICLES = API_URL + '/articles/?format=json&page_size=6&page=';
const API_URL_ARTICLE = API_URL + '/articles/';
const API_URL_CONTACTS = API_URL + '/contacts/?format=json';
const API_URL_MENUREST = API_URL + '/menurest/?format=json';
const API_URL_SALE = API_URL + '/sale/?format=json';
const API_URL_REVIEWS = API_URL + '/reviews/?format=json&page_size=6&page=';
const API_URL_DEGUSTATION = API_URL + '/wineevening/?format=json';
const API_URL_BIRTHDAY = API_URL + '/birthday/?format=json';
const API_URL_POLYTICS = API_URL + '/polytics/?format=json';
//формы обратной связи
const API_URL_CREATE_RESERVE = API_URL + '/reserve/';
const API_URL_CREATE_CALL = API_URL + '/call/';
const API_URL_CREATE_DEGUSTATION = API_URL + '/degustation/';
const API_URL_CREATE_HAPPY = API_URL + '/happy/';
// SEO - модуль
const API_URL_SEO = API_URL + '/seo/?format=json';

export {
    API_URL_ARTICLES,
    API_URL_ARTICLE,
    API_URL_CONTACTS,
    API_URL_MENUREST,
    API_URL_SALE,
    API_URL_REVIEWS,
    API_URL_DEGUSTATION,
    API_URL_BIRTHDAY,
    API_URL_POLYTICS,
    API_URL_CREATE_RESERVE,
    API_URL_CREATE_CALL,
    API_URL_CREATE_DEGUSTATION,
    API_URL_CREATE_HAPPY,
    API_URL_SEO,
}