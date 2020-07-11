class Game < ApplicationRecord
  validates :passcode, presence: true

  has_many :users
  validates_length_of :users, maximum: 2
end
