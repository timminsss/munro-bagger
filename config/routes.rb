Rails.application.routes.draw do
  # root 'pages#home'
  devise_for :users

  namespace :api do
    namespace :v1 do
      resources :munros
    end
  end

  root 'pages#home'
  # get '/home', to: 'pages#home'


  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
