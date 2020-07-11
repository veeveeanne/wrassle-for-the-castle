class Api::V1::GamesController < ApplicationController
  def create
    passcode = (0...8).map { (65 + rand(26)).chr }.join
    game = Game.new(passcode: passcode)
    if game.save
      render json: {game: game}
    else
      render json: {error: "Error creating a game"}
  end
end
