workflow "Deploy Master" {
  resolves = ["Deploy the app"]
  on = "push"
}

action "Build the app" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  args = "run build"
}

action "Deploy the app" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["Build the app"]
  args = "run deploy"
}
