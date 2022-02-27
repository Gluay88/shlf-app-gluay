class Blog < ApplicationRecord
    belongs_to :user
    belongs_to :shlf
    validates :name, :comment, presence: true
end
