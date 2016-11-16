var myApp = angular.module('spendingApp');
myApp.service("storageService", storageServiceServer);


function storageServiceServer($http) {
  var storage = [];

  $http.get('/api/items').then(function(result) {
    console.log(result)
    storage = result.data;

  });

  function addRecord(newRecord, notificationcallback) {
    $http.post('/api/items', newRecord).then(function(result) {

      if (result.status !== 200) {
        console.log('HTTP ERROR ', result.status);

        return;
      }
      notificationcallback("Elem hozzáadva");
      newRecord['_id'] = result.data._id;
      storage.unshift(newRecord);
    });
  }

  function deleteRecord(notificationcallback,id) {
    $http.delete('/api/items/' + id).then(function(result) {
      if(result.status == 200) {
        storage = storage.filter(function (record) {
          return record._id != id;
        })
        return notificationcallback('Törölve');
      }
      notificationcallback('Hiba');
    });

  }
  function listRecords() {
    return storage.slice();
  }

  this.addRecord = addRecord;
  this.listRecords = listRecords;
  this.deleteRecord = deleteRecord;
}
