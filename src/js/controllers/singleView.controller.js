import domtoimage from 'dom-to-image';
import { phones } from '../phones.js'

function SingleView ($scope, $stateParams) {

  let vm = this;
  vm.backgroundSelect = backgroundSelect;
  vm.screenshotSelect = screenshotSelect;
  vm.setFontColor = setFontColor;
  vm.savePic = savePic;
  vm.blurToggle = blurToggle;
  vm.isActive = false;
  vm.background = "";
  vm.screenshot = "";
  vm.phones = phones
  vm.drop = drop;


  function backgroundSelect () {
    filepicker.pick(
      function(Blob){
        vm.background = Blob.url;
        $scope.$apply();
      });
    }

    function screenshotSelect () {
      filepicker.pick(
        function(Blob){
          vm.screenshot = Blob.url;
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
      // Save Image
      let selectImage = document.getElementById("imageCont");

      function savePic (){
        domtoimage.toPng(selectImage).then ( function (dataUrl){
          var img = new Image()
          img.src = dataUrl;
          $('.savedImage').html(img)
        })
        .catch(function (error){
          console.error('oops, something went wrong!', error);
        })
      }

      // init function
      function init () {
        phones.filter (function () {
          vm.phone = phones[$stateParams.id]

        })
      }

      init()

      // drop event for draggables
      function drop (event, ui) {
      }

      var hexvalue = $('.jscolor').val()

      // font editing tools
      function setFontColor (){
        var hexvalue = $('.jscolor').val()
        hexvalue = "#" + hexvalue
        document.getElementById("phoneTextTwo").style.color = hexvalue
        document.getElementById("phoneTextOne").style.color = hexvalue
      }

    } // close

    SingleView.$inject = ['$scope', '$stateParams'];
    export { SingleView };
