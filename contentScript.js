//store url in variable
let url = window.location.href;

//log the important information to the console
chrome.storage.sync.get('userID', function(temp) {
    console.log("User ID: " + temp.userID);
    console.log("URL: " + url);
    console.log("Date: " + getDate());
  });
  
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
