class V1::GamesController < ApplicationController
  def create
    passcode = (0...8).map { (65 + rand(26)).chr }.join
    binding.pry
    game = Game.new(passcode: passcode, host: current_user)
    if game.save
      render json: {game: game}
    else
      render json: {error: "Error creating a game"}
    end
  end

  def show
    game = Game.where("passcode = '#{params[:id]}'")
    render json: game
  end
end
