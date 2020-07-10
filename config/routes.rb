Rails.application.routes.draw do
  root 'static#index'
  
  get '/', to: 'static#index'
 
  namespace :v1, defaults: { format: 'json' } do
    get 'users', to: 'users#index'
  end
end
