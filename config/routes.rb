Rails.application.routes.draw do
  devise_for :users
  root "games#index"
  get "profiles/me" => "profiles#me", as: :my_profile

  resources :games, only: [:index, :show, :new, :create] do
    resources :captive, only: [] do
      collection do
        post :increase_player_attribute
        post :decrease_player_attribute
      end
    end
  end
end
