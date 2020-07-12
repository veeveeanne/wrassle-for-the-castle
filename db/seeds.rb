# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
# game1 = Game.create({ passcode: '12345678', current_castle: nil })
# host1 = User.new({ screen_id: 'host1', soldiers_remaining: 100, sent_soldiers: nil, castle_points: 0 })
# guest1 = User.new({ screen_id: 'guest1', soldiers_remaining: 100, sent_soldiers: nil, castle_points: 0 })

# host1.game = game1
# guest1.game = game1
# host1.save
# guest1.save

host1 = User.new({ screen_id: 'host1', soldiers_remaining: 100, sent_soldiers: nil, castle_points: 0 })
game1 = Game.new({ passcode: '12345678', host: host1, current_castle: nil })
guest1 = User.new({ screen_id: 'guest1', soldiers_remaining: 100, sent_soldiers: nil, castle_points: 0 })
game1.guest = guest1

host1.save
game1.save
guest1.save