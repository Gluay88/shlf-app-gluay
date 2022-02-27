require 'rails_helper'

RSpec.describe Blog, type: :model do
  it 'is not a valid without a name' do
    gina = Blog.create name: ''
    expect(gina.errors[:name]).to_not be_empty
  end
  it 'is not valid wiithout a comment' do
    gina = Blog.create comment: ''
    expect(gina.errors[:comment]).to_not be_empty
  end 
end
