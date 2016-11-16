var myApp = angular.module('myApp');
myApp.service("storageService", storageServiceMemory);


function storageServiceMemory() {
  var storage = [];

  function addRecord(newRecord) {
    storage.push(newRecord);
  }

  function listRecords() {
    return storage.slice();
  }

  function deleteRecord(id){
    storage =  storage.filter(function (record) {
      return record._id != id;
    })
  }

  this.addRecord = addRecord;
  this.listRecords = listRecords;
  this.deleteRecord = deleteRecord;

}
