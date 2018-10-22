class GamesController < ApplicationController
  def index
  end

  def new
  end

  def create
    game = active_user.create_game(params)
    redirect_to game_path(game)
  end

  def show
    @game = active_user.games.find(params[:id])
  end
end
