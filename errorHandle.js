Polymer('log-error',{
       ready:function(){
        var that = this;
           window.onerror = function(error, targetFile, line) {
               var jsonData = {};
               jsonData["referenceError"] = error.replace(":", "");
               jsonData["lineError"] = line;
               jsonData["targetFileError"] = targetFile.replace(":", "");
               that.params = JSON.stringify(jsonData);
               that.$.request.go();
           };
       } 
});