class V1::GamesController < ApplicationController
  def create
    passcode = (0...8).map { (65 + rand(26)).chr }.join
    current_user = User.find(params[:host_id])
    # binding.pry
    game = Game.new(passcode: passcode, host: current_user, current_castle: 1)
    if game.save
      render json: {game: game}
    else
      render json: {error: "Error creating a game"}
    end
  end

  def show
    game = Game.where("passcode = ?", params[:id]).order(:created_at).last

    render json: {game: game}
  end

  def join
    game = Game.where("passcode = ?", params[:id]).order(:created_at).last
    if game
      current_user = User.find(params[:user_id])
      game.guest = current_user
      if game.save
        render json: {game: game}
      else
        render json: {error: "Error joining game"}
      end
    else
      render json: {error: "Passcode is not valid"}
    end
  end

  def refresh
    game = Game.where("passcode = ?", params[:id]).order(:created_at).last
    if game
      current_user = User.find(params[:user_id])
     
      opponent_id = get_opponent_id(game, current_user.id)
      opponent = User.find(opponent_id)
      if game.save
        render json: {
          game: game,
          opponent: opponent
        }
      else
        render json: {error: "Error joining game"}
      end
    else
      render json: {error: "Passcode is not valid"}
    end
  end

  private
  
  def get_opponent_id(game, current_user_id)
    host_id = game.host.id

    if current_user_id === host_id
      return game.guest_id
    else 
      return game.host_id
    end
  end
end
