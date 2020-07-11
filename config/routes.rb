Rails.application.routes.draw do
  root 'static#index'

  get '/title', to: 'static#index'

  namespace :v1 do
    resources :users, only: [:create, :show]
    resources :games, only: [:create, :show]
  end
end
