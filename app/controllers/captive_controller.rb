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
end
