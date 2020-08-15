/*
  Google Sheets Script for sheets linked with a Google Form which gets new form submissions from columns.
  Requires env.gs file with getSupportToken() function.
*/

function onFormSubmit(e) {
  
  var ghToken = getSupportToken();
  var result = e.values;
  var email = result[1];
  var title = result[2];
  var details = result[3];
  var payload = {
    "title": title,
    "body": "Issue Sender: "
    + email
    +"\n\nIssue Description:\n"
    + details,
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
