# Feedback
For customer-feedback, bug reports, metric collection and external issue tracking in accordance with [GitHub's Standard on public issue tracking](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-an-issues-only-repository).

**TODO:**

- [ ] Build Google Forms Scripts to convert external forms into issues
- [ ] Create labels for various project aspects (i.e. flutter-app, iOS, Android, Server etc.)
- [ ] Create labels for testing groups (i.e. beta-release, stable-release etc.)


## Getting Started

There is no need to clone this repository if using for the purposes of scripting within the Google suite of products. You will be able to push code to this repository using the Google Script Engine Github Extension (Pulling from the Google script editor not recomennded as this will flood your whole project with other scripts). In future, other applications for this repositry may necesitate the need for cloning.

### Prerequisites

- [**Google Script Engine Chrome GitHub Extension**](https://chrome.google.com/webstore/detail/google-apps-script-github/lfjcgcmkmjjlieihflfhjopckgpelofo/related?hl=en)
- [**@EventHopper-Support**](https://github.com/eventhopper-support) GitHub Token ([refer to documentation](https://docs.google.com/document/d/1zYid1Ei8TIXN1NPlI_dxAUcbUdDYtzD9XH4cNu6cb-k/edit#))

### Code Usage

The following usage guidelines must be adhered to (especially Step 2):

>1. Start a new Google Script Engine Project from the context of one of Google's docs products.<br><br>
>2. **VERY IMPORTANT: It is important that this step is carried out in every new EventHopper Google Script Engine Project.**<br> 
>    - Click on the gear button next to the lightbulb in the top bar. 
>    - Under the option titled `Ignore file patterns (regex separated by ';')` section type `env.gs`. 
>    - This will prevent the auth token exposure. If the auth token is ever exposed it will automatically deauthenticate bringing our feedback system down until the tokens are >replaced.<br><br>
>3. Copy/paste the `template.gs` file into your Google Script Engine project.<br><br>
>4. Copy/paste the `env.dist.gs` file into your Google Script Engine project.<br><br>
>5. In the Google Script Engine Editor, make a copy of `env.dist.gs` and rename it to `env.gs`.<br><br>
>6. Configure the env.gs file with the appropriate token as mentioned in the [documentation](https://docs.google.com/document/d/1zYid1Ei8TIXN1NPlI_dxAUcbUdDYtzD9XH4cNu6cb->k/edit#)<br><br>
>7. You're now setup to script!
