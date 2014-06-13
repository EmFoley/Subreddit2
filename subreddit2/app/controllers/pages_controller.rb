class PagesController < ApplicationController

  def index
    reddit = Snoo::Client.new
    subreddit = params[:subreddit]
    @list_array = reddit.get_listing({subreddit: subreddit, page: 'new', limit: 20})['data']['children']
  end

end