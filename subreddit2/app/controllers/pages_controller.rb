class PagesController < ApplicationController

  def index
    @subreddit = params[:subreddit]
  end

  def get_subreddits
    p params
    render :json => params[:q]
  end

end