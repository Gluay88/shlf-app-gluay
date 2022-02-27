require 'rails_helper'

RSpec.describe Shlf, type: :model do
  it 'is not valid without a name' do
    apple = Shlf.create name: ''
    expect(apple.errors[:name]).to_not be_empty
  end
end
