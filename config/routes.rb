Rails.application.routes.draw do
  devise_for :users
  root "games#index"
  get "profiles/me" => "profiles#me", as: :my_profile
  resources :games, only: [:index, :show, :new, :create]
end
