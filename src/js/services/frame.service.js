function FrameService (SERVER, $http, $cookies) {

  this.addFrame   = addFrame;
  this.headers    = headers;

  function addFrame (user) {
    return $http.post(SERVER.URL + 'register', user)
  }

  function headers() {
    let authToken = $cookies.get('access_token');
    return { headers: {'access_token': authToken}};
  }



} // closing bracket for class

FrameService.$inject = ['SERVER', '$http', '$cookies'];
export { FrameService }
