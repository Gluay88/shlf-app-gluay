02/17/2022
Gluay-
$ rails new apartment-app -d postgresql -T
$ cd apartment-app
$ rails db:create
Add the remote from your GitHub classroom repository
Create a default branch (main)
Make an initial commit to the repository
$ bundle add rspec-rails
$ rails generate rspec:install
$ bundle add devise
$ rails generate devise:install
$ rails generate devise User
$ bundle add react-rails
$ rails webpacker:install:react
$ rails generate react:install
$ rails generate react:component App
$ rails generate controller Home
$ rails db:migrate
$ rails s
- add bootstrap
yarn add bootstrap
yarn add reactstrap
Add to src/index.js: import 'bootstrap/dist/css/bootstrap.min.css'
- add jest in package.json
"jest": {
    "roots": [
      "app/javascript/components"
    ]
  }