class User < ApplicationRecord
  validates :screen_id, presence: true
  validates :soldiers_remaining, presence: true, numericality: { only_integer: true }
  validates :sent_soldiers, numericality: { only_integer: true, allow_nil: true, greater_than_or_equal_to: 0}
end
