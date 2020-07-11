Rails.application.routes.draw do
  root 'static#index'

  get '/title', to: 'static#index'
  get '/lobby', to: 'static#index'
  get '/games/:id', to: 'static#index'
  get '/victory', to: 'static#index'

  namespace :v1, defaults: { format: 'json' } do
    get 'users', to: 'users#index'
  end
end
