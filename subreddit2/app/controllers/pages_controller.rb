class PagesController < ApplicationController

  def index
    @subreddit = params[:subreddit]
  end

  def get_subreddits
    respond_to do |format|
      format.js { render :json => {cat: "meow"} }
    end
  end

end