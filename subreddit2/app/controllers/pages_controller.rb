class PagesController < ApplicationController

  def index
    @subreddit = params[:subreddit]
  end

  def get_subreddits
    respond_to do |format|
      format.html
    end
  end

end