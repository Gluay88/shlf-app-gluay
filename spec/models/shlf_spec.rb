require 'rails_helper'

RSpec.describe Shlf, type: :model do
  it 'is not valid without a name' do
    apple = Shlf.create name: ''
    expect(apple.errors[:name]).to_not be_empty
  end
  it 'is not valid without a room_temp' do
    apple = Shlf.create room_temp: ''
    expect(apple.errors[:room_temp]).to_not be_empty
  end
  it 'is not valid without a room_temp' do
    apple = Shlf.create refrigerator_temp: ''
    expect(apple.errors[:refrigerator_temp]).to_not be_empty
  end
  it 'is not valid without a room_temp' do
    apple = Shlf.create freezer_temp: ''
    expect(apple.errors[:freezer_temp]).to_not be_empty
  end
  it 'is not valid without an image' do
    apple = Shlf.create image: ''
    expect(apple.errors[:image]).to_not be_empty
  end
end
