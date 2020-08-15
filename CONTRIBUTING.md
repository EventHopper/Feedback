# Contributing Guidelines

### Code Usage

The following usage guidelines must be adhered to (especially Step 2).<br> These steps assume prerequsistes have already been met:

1. Start a new Google Script Engine Project from the context of one of Google's docs products.<br><br>
2. **VERY IMPORTANT: It is important that this step is carried out in every new EventHopper Google Script Engine Project.**<br> 
    - `Click on the gear button next to the lightbulb in the top bar. `
    - `Under the option titled "Ignore file patterns (regex separated by ';')" insert the pattern "env.gs". `
    - `This will prevent auth token exposure. If the auth token is ever exposed it will automatically deauthenticate bringing our feedback system down until the tokens are replaced.`
<br><br>
3. Copy/paste the `template.gs` file into your Google Script Engine project. 
4. Rename your file with the convention `g[product].[relevant domain].gs` (e.g. `gsheets.apifeedback.gs`)<br><br>
5. Copy/paste the `env.dist.gs` file into your Google Script Engine project.<br><br>
6. In the Google Script Engine Editor, make a copy of `env.dist.gs` and rename it to `env.gs`.<br><br>
7. Configure the env.gs file with the appropriate token as mentioned in the [documentation](https://docs.google.com/document/d/1zYid1Ei8TIXN1NPlI_dxAUcbUdDYtzD9XH4cNu6cb-k/edit#)<br><br>
8. Register your form in [**FORMS.md**](https://github.com/EventHopper/Feedback/blob/master/FORMS.md). 
   - Add the form name hyperlinked to the doc containing the script.
   - Add the number of the eventhopper-support token the form is using.<br><br>
9. You're now setup to script!
