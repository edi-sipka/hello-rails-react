Rails.application.routes.draw do
  root 'root#index'
namespace :api do
  resources :messages, only: [:index]
end
end
