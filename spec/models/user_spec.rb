require 'rails_helper'

RSpec.describe User, type: :model do
  it 'it not valid without an email' do
    gina = User.create email: ''
    expect(gina.errors[:email]).to_not be_empty
  end
end
