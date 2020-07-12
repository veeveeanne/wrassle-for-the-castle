class User < ApplicationRecord
  # belongs_to :game, optional: true
  has_many :hosted_games, class_name: "Game", foreign_key: "host_id"
  has_many :joined_games, class_name: "Game", foreign_key: "guest_id"

  validates :screen_id, presence: true
  validates :soldiers_remaining, presence: true, numericality: { only_integer: true }
  validates :sent_soldiers, numericality: { only_integer: true, allow_nil: true, greater_than_or_equal_to: 0, less_than_or_equal_to: 100}
  validates :castle_points, numericality: { only_integer: true, greater_than_or_equal_to: 0, less_than_or_equal_to: 55}
end
