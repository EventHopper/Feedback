function onFormSubmit(e) {
  
  var ghToken = getSupportToken();
  
  var payload = {
    "title": e.namedValues["Give the Issue a Name"][0],
    "body": "Issue Sender: "+e.namedValues["Email Address"][0]+"\n\nIssue Description:\n"+e.namedValues["Describe the Issue"][0],
    "labels": [
      "external-issue", "api-docs"
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
  
  var response = UrlFetchApp.fetch("https://api.github.com/repos/EventHopper/Feedback/issues", options);
}
