class Game < ApplicationRecord
  belongs_to :user

  def self.not_done
    where.not(state: "done")
  end

  def to_h
    {
      name: name,
      game_book: game_book,
      game_data: game_data
    }
  end

  def initialize_game(params)
    self.name = params[:name]
    self.game_book = params[:game_book]

    case game_book
    when "captive"
      self.game_data = {
        strength: nil,
        dexterity: nil,
        will: nil,
        health: 20,
        time: 0,
        inventory: [
          nil, nil, nil
        ],
        notes: ""
      }
    else
      raise "Invalid game book: #{game_book.inspect}"
    end
  end
end
