angular.module("demoApp",["firebase"])
.controller("demoCtrl",demoCtrl);
function demoCtrl($timeout,$firebaseObject,$firebaseArray)
{
    var demo=this;
    var selectedfile;
    $("#files").on("change",function(event)
  {
    console.log("hello")
    selectedfile=event.target.files[0];
  });
  demo.uploadFile=function()
  {
    var filename=selectedfile.name;
    var storageRef=firebase.storage().ref('/images/'+filename);
    var uploadTask=storageRef.put(selectedfile);
    
    uploadTask.on('state_changed',function(snapshot)
  {

  }
  ,function(error)
  {

  },function(error)
  {
    var downloadURL=uploadTask.snapshot.downloadURL;
    console.log(downloadURL);
  });
  }

}

