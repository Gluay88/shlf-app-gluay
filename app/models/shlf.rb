class Shlf < ApplicationRecord
    has_many :blogs
    validates :name, :image, presence: true
    validates :room_temp, :refrigerator_temp, :freezer_temp, presence: true
end
