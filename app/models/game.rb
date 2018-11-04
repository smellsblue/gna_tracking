class Game < ApplicationRecord
  belongs_to :user

  def self.not_done
    where.not(state: "done")
  end

  def captive
    @captive ||= Captive.new(self)
  end

  def to_h
    {
      game_info: {
        id: id,
        name: name,
        book: game_book,
        debug: Rails.env.development?
      },
      game_data: game_data
    }
  end

  def initialize_game(params)
    self.name = params[:name]
    self.game_book = params[:game_book]

    case game_book
    when "captive"
      self.game_data = Captive.initial_game_data
    else
      raise "Invalid game book: #{game_book.inspect}"
    end
  end
end
