function UserService (SERVER, $http, $cookies) {

  this.signup     = signup;
  this.login      = login;
  this.headers    = headers;
  this.getUser    = getUser;
  this.logOut     = logOut;
  this.isLoggedIn = isLoggedIn

  function signup (user) {
    return $http.post(SERVER.URL + 'register', user)
  }

  function login (user) {
    return $http.post(SERVER.URL + 'login', user)
  }

  function headers() {
    let authToken = $cookies.get('access_token');
    return { headers: {'Authorization': 'Bearer ' + authToken}};
  }

  function getUser () {
    return $cookies.get('username');
  }

  function logOut () {
    $cookies.remove('access_token');
    $cookies.remove('username');
    console.log("Logged Out!");
  }

  function isLoggedIn () {
    return !!this.getUser() ? true : false;
  }
} // closing bracket for class

UserService.$inject = ['SERVER', '$http', '$cookies'];
export { UserService }
