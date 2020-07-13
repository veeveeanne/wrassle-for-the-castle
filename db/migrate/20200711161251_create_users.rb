class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :screen_id, null: false
      t.integer :soldiers_remaining, null: false, default: 100
      t.integer :sent_soldiers
      t.integer :castle_points, null: false, default: 0
      t.integer :ready_for_battle, default: 0

      t.timestamps null: false
    end
  end
end
