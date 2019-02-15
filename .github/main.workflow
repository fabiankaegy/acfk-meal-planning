workflow "Deploy Master" {
  on = "push"
  resolves = ["Master"]
}

action "Master" {
  uses = "actions/bin/filter@46ffca7632504e61db2d4cb16be1e80f333cb859"
  needs = ["Deploy the App"]
  args = "branch master"
}

action "Install node modules" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  args = "install"
}

action "Build the App" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  args = "run build"
  needs = ["Install node modules"]
}

action "Deploy the App" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["Build the App"]
  args = "run deploy"
}

