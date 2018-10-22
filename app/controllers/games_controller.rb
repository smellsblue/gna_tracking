class GamesController < ApplicationController
  def index
  end

  def show
    @game = active_user.games.find(params[:id])
  end
end
