class Captive
  VALID_ATTRIBUTES = %w(health strength dexterity will)

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

  def change_time(params)
    if params.require(:increase) == "true"
      raise "Time is at maximum!" if game.game_data["time"] >= 20
      game.game_data["time"] += 1
    else
      raise "Time is at minimum!" if game.game_data["time"] <= 0
      game.game_data["time"] -= 1
    end

    game.save!
  end

  def increase_player_attribute(params)
    attr = params.require(:attribute)
    raise "Invalid attribute" unless VALID_ATTRIBUTES.include?(attr)
    raise "Health is at maximum!" if attr == "health" && game.game_data[attr] >= 20
    game.game_data[attr] += 1
    game.save!
  end

  def decrease_player_attribute(params)
    attr = params.require(:attribute)
    raise "Invalid attribute" unless VALID_ATTRIBUTES.include?(attr)
    game.game_data[attr] -= 1
    game.save!
  end

  def set_inventory_item(params)
    index = params.require(:index).to_i
    raise "Invalid index!" if index < 0 || index > 2
    game.game_data["inventory"][index] = params[:value]
    game.save!
  end
end
