workflow "Deploy Master" {
  on = "push"
  resolves = [
    "Filters for GitHub Actions",
    "GitHub Pages Deploy",
    "Build",
  ]
}

action "Filters for GitHub Actions" {
  uses = "actions/bin/filter@46ffca7632504e61db2d4cb16be1e80f333cb859"
  args = "branch master"
}

action "Install" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  args = "install"
  needs = [
    "Filters for GitHub Actions",
  ]
}

action "Test" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["Install"]
  args = "run ci_test"
}

action "GitHub Pages Deploy" {
  uses = "maxheld83/ghpages@v0.2.1"
  needs = ["Build"]
  env = {
    BUILD_DIR = "public/"
  }
  secrets = ["GH_PAT"]
}

action "Build" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["Test"]
  args = "run build"
}
