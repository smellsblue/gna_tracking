class CreateGames < ActiveRecord::Migration[5.1]
  def change
    create_table :games do |t|
      t.references :user, null: false
      t.foreign_key :users, column: :user_id
      t.string :name, null: false
      t.string :state, null: false, default: "playing"
      t.string :game_book, null: false
      t.json :game_data, null: false, default: {}
      t.timestamps
      t.index :state
    end
  end
end
