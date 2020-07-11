class CreateGames < ActiveRecord::Migration[6.0]
  def change
    create_table :games do |t|
      t.string :passcode, null: false
      t.integer :current_castle, default: nil

      t.timestamps
    end
  end
end
