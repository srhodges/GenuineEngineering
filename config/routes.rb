Rails.application.routes.draw do
  resources :softwares, only: :index
  resources :posts
  post '/auth/login', to: 'authentications#login'
  get '/auth/verify', to: 'authentications#verify'
  resources :users, only: :create
  put '/softwares/:software_id/posts/:id', to: 'posts#add_software'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
