var ghToken = "b3fbd80eb2f42dffcc0105fe467594bef3d7ca04";

function onFormSubmit(e) {
  
//  var payload = {
//    "title": e.namedValues["Give the Issue a Name"][0],
//    "body": "Issue Sender: "+e.namedValues["Email Address"][0]+"\n\nIssue Description:\n"+e.namedValues["Describe the Issue"][0],
//    "labels": [
//      "external-issue"
//    ]
//  };
  
  var payload = {
    "title": "Testing Issue Creation Script",
    "body": "Issue Sender: TEST",
    "labels": [
      "external-issue"
    ]
  };
  
  var options = {
    "method": "POST",
    "contentType": "application/json",
    "headers": {
        "authorization": "token "+ ghToken
    },
    "payload": JSON.stringify(payload)
  };
  
  var response = UrlFetchApp.fetch("https://api.github.com/repos/EventHopper/EHServerSide/issues", options);
}
