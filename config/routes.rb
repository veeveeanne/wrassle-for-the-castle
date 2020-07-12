Rails.application.routes.draw do
  root 'static#index'

  get '/title', to: 'static#index'

  namespace :v1 do
    resources :users, only: [:create, :show]
    get '/games/:id/:user_id' => 'games#join'
    resources :games, only: [:create, :show]
  end
end
