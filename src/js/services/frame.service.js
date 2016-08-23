function FrameService (SERVER, $http, $cookies, UserService) {

  this.addFrame   = addFrame;
  this.getFrames  = getFrames;

function addFrame(image) {
    $http.post(SERVER.URL + 'images', { url: image }, UserService.headers())
}

function getFrames(){

    $http.get(SERVER.URL + `images`, UserService.headers);
}

} // closing bracket for class

FrameService.$inject = ['SERVER', '$http', '$cookies', 'UserService'];
export { FrameService }
