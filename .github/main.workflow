workflow "Deploy Master" {
  on = "push"
  resolves = [
    "Filters for GitHub Actions",
    "Deploy Test",
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
  needs = ["Build"]
  secrets = ["GITHUB_TOKEN"]
  args = "run deploy --repo 'https://' + process.env.GITHUB_TOKEN + '@github.com/fabiankaegy/acfk-meal-planning.git' --silent true"
  env = {
    USERNAME = "fabiankaegy"
  }
}