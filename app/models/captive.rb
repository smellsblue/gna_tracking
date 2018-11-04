class Captive
  VALID_ATTRIBUTES = %w(strength dexterity will)

  attr_reader :game

  def initialize(game)
    @game = game
  end

  def self.initial_game_data
    {
      strength: 5,
      dexterity: 5,
      will: 5,
      health: 20,
      time: 0,
      inventory: [
        "", "", ""
      ],
      notes: ""
    }
  end

  def increase_player_attribute(params)
    attr = params.require(:attribute)
    raise "Invalid attribute" unless VALID_ATTRIBUTES.include?(attr)
    game.game_data[attr] += 1
    game.save!
  end

  def decrease_player_attribute(params)
    attr = params.require(:attribute)
    raise "Invalid attribute" unless VALID_ATTRIBUTES.include?(attr)
    game.game_data[attr] -= 1
    game.save!
  end
end
