import domtoimage from 'dom-to-image';
import { phones } from '../phones.js'

function SingleView ($scope, $stateParams) {

  let vm = this;
  vm.backgroundSelect     = backgroundSelect;
  vm.screenshotSelect     = screenshotSelect;
  vm.logoSelect           = logoSelect;
  vm.setFontColor         = setFontColor;
  vm.setFontSize          = setFontSize
  vm.savePic              = savePic;
  vm.blurToggle           = blurToggle;
  vm.isActive             = false;
  vm.background           = "./images/Blanks/blankmain.png";
  vm.screenshot           = "./images/Blanks/blankscreen.png";
  // vm.logo                 = "./images/Blanks/logo.png"
  vm.phones               = phones
  vm.drop                 = drop;


  $scope.sliderLogo = {
    value: 200,
    options: {
      floor: 0,
      ceil: 50
    }
  };

  $scope.sliderTwo = {
    value: 50,
    options: {
      floor: 0,
      ceil: 50
    }
  };


  $scope.slider = {
  value: 50,
  options: {
    floor: 0,
    ceil: 50
  }
};

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

      function logoSelect () {
        filepicker.pick(
          function(Blob){
            vm.logo = Blob.url;
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

      // drop event for draggables and resiazbles
      function drop (event, ui) {
      }

      $( function() {
        $( "#phoneTextOne" ).resizable();
      } );


      // font editing tools
      function setFontColor (){
        var hsvalue = $('.colorpicker').val()
        console.log(hsvalue)
        document.getElementById("phoneTextTwo").style.color = hsvalue
        document.getElementById("phoneTextOne").style.color = hsvalue
      }


      function setFontSize() {
        var selectValue = $('.button').val();
        console.log(selectValue)
        document.getElementById("phoneTextTwo").style.fontSize = selectValue;
        document.getElementById("phoneTextOne").style.fontSize = selectValue;
      }

      setFontSize();
    } // close

    SingleView.$inject = ['$scope', '$stateParams'];
    export { SingleView };
