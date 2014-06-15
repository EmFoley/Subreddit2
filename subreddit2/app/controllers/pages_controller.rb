class PagesController < ApplicationController

  def index
  end

  
  def get_subreddits
    reddit = Snoo::Client.new
    subreddit = params[:q]
    @response = reddit.get_listing({subreddit: subreddit, page: 'new', limit: 20})['data']['children']
  end



  # def get_subreddits
  #   subreddit = params[:q]
  #   # subreddit = params[:subreddit]
  #   response = HTTParty.get("http://reddit.com/r/#{subreddit}/new/.json")
  #   sub_post_links = response["data"]["children"]
  #   # # use httparty to make requests to reddit.com for the subreddit stuff
  #   # # save important info to objects, render get_subreddits view to populate the data
  #   # puts response.body
  #   @pretty_formatted = everything_parsed
  #   # => render some view that has access to @pretty_formatted, loop through in erb file with the attributes needed 
  #   binding.pry()
  # end

end