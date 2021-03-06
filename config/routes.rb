NewOfferchat::Application.routes.draw do
  root :to => "home#index"
  get :users, :controller => :home, :action => :users
  get :chats, :controller => :home, :action => :chats
  get :settings, :controller => :home, :action => :settings
  get :triggers, :controller => :home, :action => :triggers
  get :responses, :controller => :home, :action => :responses
  get :chat_timeout, :controller => :home, :action => :chat_timeout
  get :chat_limit, :controller => :home, :action => :chat_limit
  get :personal_settings, :controller => :home, :action => :personal_settings
  get :widget_settings, :controller => :home, :action => :widget_settings
  get :users, :controller => :home, :action => :users 
  get :im_settings, :controller => :home, :action => :im_settings 
  get :account_settings, :controller => :home, :action => :account_settings
  get :users_create, :controller => :home, :action => :users_create 
  get :widget_settings_banner, :controller => :home, :action => :widget_settings_banner
  get :widget_settings_post_chat, :controller => :home, :action => :widget_settings_post_chat
  get :widget_settings_offline_form, :controller => :home, :action => :widget_settings_offline_form
  get :widget_settings_pre_chat, :controller => :home, :action => :widget_settings_pre_chat
  get :widget_settings_install, :controller => :home, :action => :widget_settings_install
  get :home, :controller => :home, :action => :home
  get :websites, :controller => :home, :action => :websites
  get :websites_add, :controller => :home, :action => :websites_add
  get :history, :controller => :home, :action => :history
  get :reports, :controller => :home, :action => :reports
  get :reports_agents, :controller => :home, :action => :reports_agents
  get :reports_agent, :controller => :home, :action => :reports_agent
  get :reports_agents_no, :controller => :home, :action => :reports_agents_no

  # The priority is based upon order of creation:
  # first created -> highest priority.

  # Sample of regular route:
  #   match 'products/:id' => 'catalog#view'
  # Keep in mind you can assign values other than :controller and :action

  # Sample of named route:
  #   match 'products/:id/purchase' => 'catalog#purchase', :as => :purchase
  # This route can be invoked with purchase_url(:id => product.id)

  # Sample resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Sample resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Sample resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Sample resource route with more complex sub-resources
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', :on => :collection
  #     end
  #   end

  # Sample resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end

  # You can have the root of your site routed with "root"
  # just remember to delete public/index.html.
  # root :to => 'welcome#index'

  # See how all your routes lay out with "rake routes"

  # This is a legacy wild controller route that's not recommended for RESTful applications.
  # Note: This route will make all actions in every controller accessible via GET requests.
  # match ':controller(/:action(/:id))(.:format)'
end
