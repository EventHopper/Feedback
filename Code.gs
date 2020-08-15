var ghToken = "fb72ec52d26cd5158bcd3c49a9a41467324e6de6";

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
  
  var response = UrlFetchApp.fetch("https://api.github.com/orgs/EventHopper/repos/Feedback/issues", options);
}
