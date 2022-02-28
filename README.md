Hello there! Welcome to our README!

Meet the team
![RYDGers](https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?w=740)

> Gluay - Product Manager

> Regina - Project Manager

> Deon - Tech Lead

> Yann - Design Lead


02/17/2022
# Create an app - React on Rails
### Step
> $ rails new apartment-app -d postgresql -T

> $ cd apartment-app

> $ rails db:create

> Add the remote from your GitHub classroom repository

> Create a default branch (main)

> Make an initial commit to the repository

> $ bundle add rspec-rails

> $ rails generate rspec:install

> $ bundle add devise

> $ rails generate devise:install

> $ rails generate devise User

> $ bundle add react-rails

> $ rails webpacker:install:react

> $ rails generate react:install

> $ rails generate react:component App

> $ rails generate controller Home

> $ rails db:migrate

> $ rails s

## Add bootstrap
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

yarn add react-router-dom@5.3.0

## Add components

- components

* assets
* components
* pages

rails g resource Shlf name:string room_temp:string refrigerator_temp:string freezer_temp:string image:text

rails db:migrate

rails g resource Blog name:string comment:string user_id:integer shlf_id:integer

rails db:migrate

app/models
user.rb has_many :blog
blog.rb belongs_to :user
blog.rb belongs_to :shlf
shlf.rb has-many :blog

02/19/2022
bin/webpack-dev-server

- changed the Nav order and name
- added a tag on the shlf logo to link to localhost:3000
- ShlfIndex.js
- ShlfShow.js
- added link to FDA info
- added About page
- added BlogIndex page
- added BlogShow page
- read/create/update/delete functionalities

02/20/2022

- added more items to both blog and shlf mockDatas
- finished frontend

02/21/2022

- navigation styling
- seeds.rb user/shlf/blog
- Ran into this problem PG::ConnectionBad
  ran these commands in terminal
  $ rm /usr/local/var/postgres/postmaster.pid
  $ brew services restart postgresql
- BlogController

02/22/2022

- log_in and out
- config.action_mailer.default_url_options = { host: 'localhost', port: 3000 }
- Rails.application.routes.draw do
  get '\*path', to: 'home#index', constraints: ->(request){ request.format.html? }
  root 'home#index'
  end
- config.sign_out_via = :get

02/23/2022
Update functionality

02/27/2022
API Validation
gem 'simplecov', require: false, group: :test
