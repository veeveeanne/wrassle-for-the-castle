class V1::UsersController < ApplicationController
  def create
    user = User.new
    user.screen_id = Time.now.to_i
    user.save

    render json: user
  end

  def show
    render json: User.find(params[:id])
  end
end
