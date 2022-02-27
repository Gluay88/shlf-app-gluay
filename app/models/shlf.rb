class Shlf < ApplicationRecord
    has_many :blogs
    validates :name, presence: true
end
