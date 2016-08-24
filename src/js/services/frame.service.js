function FrameService (SERVER, $http, $cookies, UserService) {

  this.addFrame     = addFrame;
  this.getFrames    = getFrames;
  this.getFrame     = getFrame
  this.deleteFrame  = deleteFrame;


  function addFrame(image) {
    $http.post(SERVER.URL + 'images', { url: image }, UserService.headers())
  }

  function getFrames(){
    return $http.get(SERVER.URL + "images", UserService.headers())
  }

  function getFrame(id) {
    return $http.get(SERVER.URL + 'images' + "/" + id, UserService.headers())
  }

  function deleteFrame (id) {
    return $http.delete(SERVER.URL + "images" + "/" + id, UserService.headers())
  }

} // closing bracket for class

FrameService.$inject = ['SERVER', '$http', '$cookies', 'UserService'];
export { FrameService }
