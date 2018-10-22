class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :configure_devise_parameters, if: :devise_controller?

  protected

  def configure_devise_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:name])
  end

  private

  def active_user
    if current_user
      current_user
    else
      AnonymousUser.new
    end
  end
end
