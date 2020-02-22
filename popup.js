
window.addEventListener('DOMContentLoaded', (event) => {
  var bt = document.getElementById("btSubmit").onclick = function(){
    var userInput = document.getElementById("userID").value;
    chrome.storage.sync.get({userID}, function(temp) {
      if (!(userInput===temp.userID))
      {
        chrome.storage.sync.set({userID: userInput}, function(){
        })
      }
    })
  }
});
