// LOCAL SETTINGS
//export const API_BASE_URL = 'http://localhost:8080/api'
//export const OAUTH2_REDIRECT_URI = 'http://localhost:3000/oauth2/redirect'

// ON REMOTE
export const API_BASE_URL = "https://pwr-advert-board-backend.herokuapp.com/api"
export const OAUTH2_REDIRECT_URI = 'http://pwr-advert-board-frontend.herokuapp.com/oauth2/redirect'

export const ACCESS_TOKEN = 'accessToken';
export const GOOGLE_AUTH_URL = API_BASE_URL + '/oauth2/authorize/google?redirect_uri=' + OAUTH2_REDIRECT_URI;
export const FACEBOOK_AUTH_URL = API_BASE_URL + '/oauth2/authorize/facebook?redirect_uri=' + OAUTH2_REDIRECT_URI;