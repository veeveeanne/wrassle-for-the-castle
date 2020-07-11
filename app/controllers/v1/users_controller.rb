class V1::UsersController < ApplicationController
  def create
    user = User.new
    user.screen_id = Time.now.to_i

    if user.save
      render json: user
    else
      render json: {error: 'There was an error'}
    end
  end

  def show
    render json: User.find(params[:id])
  end
end
