Rails.application.routes.draw do
  get 'exam_form/show'
  root 'exam_form#show'
  post '/send_email', to: 'exam_form#send_email'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html 
end
