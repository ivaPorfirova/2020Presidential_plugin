

//checks if the current user has a unique ID
chrome.storage.sync.get('userID', function(temp) {
    var userID = temp.userID;
    if (userID == null) { //if th euser does not have an ID, generate one
        userID = getUserID();
        chrome.storage.sync.set({userID: userID});
    }
});

//store url in variable
let url = window.location.href;

//log th eimportant information to the console
chrome.storage.sync.get('userID', function(temp) {
    console.log("User ID: " + temp.userID);
    console.log("URL: " + url);
    console.log("Date: " + getDate());
  });


//randomly generate unique hexadecimal user ID
function getUserID() {
    var randomPool = new Uint8Array(32);
    crypto.getRandomValues(randomPool);
    var userID = "";
    for (var i = 0; i < randomPool.length; ++i) {
        userID += randomPool[i].toString(16);
    }
    return userID;
}

//add leading zeroes where necessary
function formatDate(s){
  if (s < 10)  {
    return "0" + s;
  }  else {
    return s;
  }
}

//get the date and time information for when the url is accessed
function getDate(){
  let d = new Date();
  let timeStamp = "";
  timeStamp += formatDate((d.getMonth() + 1)) + "/"; //add 1 to the month since it starts at 0
  timeStamp += formatDate((d.getDate())) + "/";
  timeStamp += d.getFullYear() + " ";

  timeStamp += formatDate((d.getHours())) + ":";
  timeStamp += formatDate((d.getMinutes())) + ":";
  timeStamp += formatDate((d.getSeconds()))

  return timeStamp; //return date and time
}



jQuery.ajax({
          url: ,
          type: "POST",
          data: {JSON.stringify({name: temp.userID, recordedurl:url, time:getDate()}) },
          dataType: "json",
          success: function(response) {
          console.log(response);
    }
});
background.txt
Displaying background.txt.