Rails.application.routes.draw do
  root 'static#index'

  get '/title', to: 'static#index'
  get '/lobby', to: 'static#index'
  get '/games/:id', to: 'static#index'
  get '/victory', to: 'static#index'

  namespace :v1 do
    resources :users, only: [:create, :show]
    resources :games, only: [:create, :show]
  end
end
