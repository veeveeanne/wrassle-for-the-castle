class User < ApplicationRecord
  belongs_to :game, optional: true

  validates :screen_id, presence: true
  validates :soldiers_remaining, presence: true, numericality: { only_integer: true }
  validates :sent_soldiers, numericality: { only_integer: true, allow_nil: true, greater_than_or_equal_to: 0, less_than_or_equal_to: 100}
  validates :castle_points, numericality: { only_integer: true, greater_than_or_equal_to: 0, less_than_or_equal_to: 55}
  validates_associated :game
end
