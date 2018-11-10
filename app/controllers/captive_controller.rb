class CaptiveController < ApplicationController
  def change_time
    active_user.games.find(params[:game_id]).captive.change_time(params)
    render json: { success: true }
  end

  def increase_player_attribute
    active_user.games.find(params[:game_id]).captive.increase_player_attribute(params)
    render json: { success: true }
  end

  def decrease_player_attribute
    active_user.games.find(params[:game_id]).captive.decrease_player_attribute(params)
    render json: { success: true }
  end

  def set_inventory_item
    active_user.games.find(params[:game_id]).captive.set_inventory_item(params)
    render json: { success: true }
  end

  def set_notes
    active_user.games.find(params[:game_id]).captive.set_notes(params)
    render json: { success: true }
  end
end
