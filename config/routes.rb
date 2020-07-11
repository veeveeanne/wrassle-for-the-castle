Rails.application.routes.draw do
  root 'static#index'

  get '/', to: 'static#index'

  namespace :v1 do
    resources :users, only: [:create, :show]
  end
end
