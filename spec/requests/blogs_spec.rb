require 'rails_helper'

RSpec.describe "Blogs", type: :request do 
  describe "GET /index" do
    it 'gets a list of blogs' do
    Blog.create(
      name: "Melon pun",
      comment: "Don’t be melon-dramatic",
    )
    get '/blogs'
    blog = JSON.parse(response.body)
    expect(response).to have_http_status(200)
    end
  end

end
