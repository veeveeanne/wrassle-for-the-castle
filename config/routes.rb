Rails.application.routes.draw do
  root 'static#index'

  get '/title', to: 'static#index'
  mount ActionCable.server, at: '/cable'
  
  namespace :v1 do
    resources :users, only: [:create, :update, :show]
    get '/games/:id/:user_id' => 'games#join'
    get '/games/:id/:user_id/refresh' => 'games#refresh'
    resources :games, only: [:create, :show]
  end
end
