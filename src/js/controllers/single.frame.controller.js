function SingleFrameController (FrameService, $stateParams, $state) {

  let vm = this;
  vm.deleteSingle = deleteSingle;


  init ();

   function init () {
     FrameService.getFrame($stateParams.id).then( res => {
       vm.image = res.data;
       console.log(vm.image)
     });
   }

   function deleteSingle() {
     FrameService.deleteFrame($stateParams.id).then( (res) => {
       $state.go('root.frames')
     });
   }

 } // closes


SingleFrameController.$inject = ['FrameService', '$stateParams', '$state'];
export { SingleFrameController }
