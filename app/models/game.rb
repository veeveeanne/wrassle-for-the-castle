class Game < ApplicationRecord
  validates :passcode, presence: true

  has_many :users
end
