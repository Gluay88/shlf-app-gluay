class Blog < ApplicationRecord
    belongs_to :user
    belongs_to :shlf
    validates :name, :comment, presence: true
    validates :user_id, presence: true
end
