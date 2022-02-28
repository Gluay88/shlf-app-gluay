require 'rails_helper'

RSpec.describe "Shlves", type: :request do
  describe "GET /index" do
    it 'gets a list of shlves' do
    Shlf.create(
      name: "Melon pun",
    )
    get '/shlves'
    blog = JSON.parse(response.body)
    expect(response).to have_http_status(200)
    end
  end
end
