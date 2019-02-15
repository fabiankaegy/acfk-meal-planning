workflow "Deploy Master" {
  on = "push"
  resolves = [
    "Filters for GitHub Actions",
    "Deploy Test",
    "Git Set User Name",
  ]
}

action "Filters for GitHub Actions" {
  uses = "actions/bin/filter@46ffca7632504e61db2d4cb16be1e80f333cb859"
}

action "Install" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  args = "install"
  needs = [
    "Filters for GitHub Actions",
  ]
}

action "Build" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["Install"]
  args = "run build"
}

action "Deploy Test" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["Git Set User Name"]
  secrets = ["GITHUB_TOKEN"]
  args = "run deploy -u process.env.GITHUB_USERNAME -p process.env.GITHUB_TOKEN"
  env = {
    USERNAME = "fabiankaegy"
  }
}

action "Git Set User Email" {
  uses = "./.github/entrypoint.sh"
  needs = ["Build"]
  args = "git config --global user.email process.env.EMAIL"
  env = {
    EMAIL = "fabian@arvernus.info"
  }
}

action "Git Set User Name" {
  uses = "./.github/entrypoint.sh"
  args = "git config --global user.name process.env.NAME"
  env = {
    NAME = "GitHub Actions"
  }
  needs = ["Git Set User Email"]
}
