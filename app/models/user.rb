class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  has_many :games
  validates :name, presence: true, format: /\A[A-Za-z0-9]+\z/, uniqueness: true

  def active_games
    games.not_done.order(created_at: :desc)
  end

  def in_game?
    current_game
  end

  def current_game
    active_games.first
  end

  def current_game_id
    current_game&.id
  end

  def create_game(params)
    games.create! do |game|
      game.initialize_game(params)
    end
  end

  def anonymous?
    false
  end

  def gravatar
    @gravatar ||= Gravatar.for_user(self)
  end
end
