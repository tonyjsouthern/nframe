import domtoimage from 'dom-to-image';
import { phones } from '../phones.js'

function SingleView ($scope, $stateParams) {

  let vm = this;
  vm.backgroundSelect = backgroundSelect;
  vm.screenshotSelect = screenshotSelect;
  vm.savePic = savePic;
  vm.blurToggle = blurToggle;
  vm.isActive = false;
  vm.background = "";
  vm.screenshot = "";
  // vm.filterID = filterID

  function backgroundSelect () {
    filepicker.pick(
      function(Blob){
        // console.log(Blob.url);
        vm.background = Blob.url;
        // console.log(vm.background);
        $scope.$apply();
      });
    }

    function screenshotSelect () {
      filepicker.pick(
        function(Blob){
          // console.log(Blob.url);
          vm.screenshot = Blob.url;
          // console.log(vm.screenshot);
          $scope.$apply();
        })
      }

      function blurToggle () {
        if ($scope.isActive === false){
          $scope.isActive = true;
        }else{
          $scope.isActive = false;
        }

      }

      let crash = document.getElementById("imageCont");

      function savePic (){
        domtoimage.toPng(crash).then ( function (dataUrl){
          var img = new Image();
          img.src = dataUrl;
          document.body.appendChild(img);
        })
        .catch(function (error){
          console.error('oops, something went wrong!', error);
        })
      }

      function init () {
        phones.filter (function () {
          vm.phone = phones[$stateParams.id]
          console.log(phones[$stateParams.id])
          // console.log(vm.phone);
        })
      }

      init()

    } // close

    SingleView.$inject = ['$scope', '$stateParams'];
    export { SingleView };
