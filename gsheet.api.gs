function onFormSubmit(e) {
  
  var ghToken = getSupportToken();
  var result = e.values;
  var email = result[1];
  var title = result[2];
  var details = result[3];
  var media = result[4]?result[4]:"`none`";
  var payload = {
    "title": title,
    "body": "**Sender**: "
    + email
    + "\n**Source**: `API Docs`"
    +"\n\n**Issue Description**:\n"
    + details
    +"\n\n**Media Links**:\n"+media,
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
