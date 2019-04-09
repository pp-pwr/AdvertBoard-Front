export const API_BASE_URL = '/api'
//export const API_TRUE_URL = 'http://localhost:8080'
export const API_TRUE_URL = 'https://pwr-advert-board-backend.herokuapp.com'
export const ACCESS_TOKEN = 'accessToken';

//export const OAUTH2_REDIRECT_URI = 'http://localhost:3000/oauth2/redirect'
export const OAUTH2_REDIRECT_URI = 'http://pwr-advert-board-frontend.herokuapp.com/oauth2/redirect'

export const GOOGLE_AUTH_URL = API_TRUE_URL + API_BASE_URL + '/oauth2/authorize/google?redirect_uri=' + OAUTH2_REDIRECT_URI;
export const FACEBOOK_AUTH_URL = API_TRUE_URL + API_BASE_URL + '/oauth2/authorize/facebook?redirect_uri=' + OAUTH2_REDIRECT_URI;