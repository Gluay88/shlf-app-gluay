require 'rails_helper'

RSpec.describe User, type: :model do
  it 'it not valid without an email' do
    gina = User.create email: ''
    expect(gina.errors[:email]).to_not be_empty
  end
  it 'it not valid if email is less than 5 characters' do
    gina = User.create password: '12345'
    expect(gina.errors[:password]).to_not be_empty
  end
end
