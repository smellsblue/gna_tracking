module ApplicationHelper
  def flash_class_for(type)
    case type
    when :alert
      :danger
    when :error
      :danger
    when :notice
      :info
    else
      type
    end
  end

  def active_user
    if current_user
      current_user
    else
      AnonymousUser.new
    end
  end

  def current_game_active?
    # TODO: Return true if the user is currently on their active game
    params[:controller] == "games" && params[:action] == "show" && params[:id].to_i == active_user.current_game_id
  end

  def my_profile_active?
    params[:controller] == "profiles" && params[:action] == "me"
  end

  def user_avatar(user, options = { size: "16" })
    image_tag user.gravatar.path(request, options)
  end
end
