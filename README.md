# Feedback :speech_balloon:
This repository is for feedback, bug reports and external issue tracking in accordance with [GitHub's public issue tracking standards](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-an-issues-only-repository).<br><br><br>

>**Cloning this repository is discouraged if simply using for scripting within the Google suite of products.<br>You can use this repository to copy templates for scripts and transfer actionable issues to relevant repositories.**

<br><br>

### **TODO :dart::**
**Short Term**

- [x] Build Google Forms Scripts to convert external forms into issues (achieved in Issue [**#3**](https://github.com/EventHopper/Feedback/issues/3))
- [ ] Create guided walkthrough for USAGE.md
- [ ] Create `template.gs` file for contributers to start from
- [ ] Create "Google Form to Issue" string conversion formats:
  - [ ] _Bug Report_
  - [ ] _Feature Request_
  - [ ] _Abuse Report_
- [ ] Create labels for various project aspects (i.e. `flutter-app`, `iOS`, `Android`, `API` etc.)
- [ ] Create labels for testing groups (i.e. `beta-release`, `stable-release` etc.)

<br>**Long Term**
- [ ] Integrate with some form of passive in-app bug reporting tool like [**Sentry.io**](https://sentry.io/welcome/)
- [ ] Use Github API to generate a monthly summary dashboard of issues
- [ ] Create OAuth App to manage pipeline
<br><br>

## Getting Started

You will be able to push code to this repository using the Google Script Engine Github Extension (Pulling from the Google script editor not recomennded as this will flood your script project with other unnecessary scripts).

### Prerequisites

- [**Google Script Engine Chrome GitHub Extension**](https://chrome.google.com/webstore/detail/google-apps-script-github/lfjcgcmkmjjlieihflfhjopckgpelofo/related?hl=en)
- [**@EventHopper-Support**](https://github.com/eventhopper-support) GitHub Token ([refer to documentation](https://docs.google.com/document/d/1zYid1Ei8TIXN1NPlI_dxAUcbUdDYtzD9XH4cNu6cb-k/edit#))

### Code Usage

Review [**USAGE.md**](https://github.com/EventHopper/Feedback/blob/master/USAGE.md)

### Resources

- [**Google Apps Script Fundamentals Colab**](https://developers.google.com/apps-script/quickstart/fundamentals-codelabs) 
- [**GitHub API Issue Documentation**](https://docs.github.com/en/rest/reference/issues#create-an-issue)

### Notes
- The .gs files are basically javascript files run from the script editor on [V8 Runtime](https://developers.google.com/apps-script/guides/v8-runtime) (the same javascript engine that runs Google Chrome and Node.js).
