class PagesController < ApplicationController

  def index
    reddit = Snoo::Client.new
    subreddit = params[:subreddit]
    require 'debugger'
    debugger
    @list_array = reddit.get_listing({subreddit: subreddit, page: 'new', limit: 20})['data']['children']
    title_1 = @list_array[0]["data"]["title"]
    url_1 = @list_array[0]["data"]["url"]
    permalink_1 = @list_array[0]["data"]["permalink"]
  end

end