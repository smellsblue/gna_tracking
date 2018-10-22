require "digest"

class Gravatar
  DEFAULT_STYLE = "retro"
  DEFAULT_RATING = "pg"

  def initialize(user)
    @user = user
  end

  def identifier
    if @user.anonymous?
      "anonymous"
    elsif @user.email.present?
      @user.email.to_s.strip.downcase
    else
      @user.id.to_s
    end
  end

  def path(request, options = {})
    params = {}
    params[:s] = options[:size] if options[:size]
    params[:d] = options[:style] || DEFAULT_STYLE
    params[:r] = options[:rating] || DEFAULT_RATING

    if params.present?
      query_params = params.map do |k, v|
        "#{CGI.escape k.to_s}=#{CGI.escape v.to_s}"
      end.join "&"

      query = "?#{query_params}"
    end

    "#{request.protocol}www.gravatar.com/avatar/#{digest}#{query}"
  end

  def gravatar_json
    { digest: digest, style: DEFAULT_STYLE, rating: DEFAULT_RATING }
  end

  def digest
    Digest::MD5.hexdigest identifier
  end

  class << self
    def for_user(user)
      new user
    end
  end
end
