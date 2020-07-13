class V1::GamesController < ApplicationController
  def create
    passcode = (0...8).map { (65 + rand(26)).chr }.join
    current_user = User.find(params[:host_id])
    # binding.pry
    game = Game.new(passcode: passcode, host: current_user, current_castle: 1.0)
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
    max_castles = 3
    game = Game.where("passcode = ?", params[:id]).order(:created_at).last
    if game
      current_user = User.find(params[:user_id])

      opponent_id = get_opponent_id(game, current_user.id)
      opponent = User.find(opponent_id)
      # binding.pry
      if current_user.ready_for_battle === game.current_castle.floor().to_i() && opponent.ready_for_battle === game.current_castle.floor().to_i()
        next_step = "result"
        game.current_castle += 0.5
        game.save
      #    winner  = getWinner(currentUser, opponent) <-- MUST DEFINE THIS
      #    if winner is host:
      #      set host castle points += {castle #}
      #    else
      #      set guest castle points += {castle #}   

      elsif current_user.ready_for_battle === opponent.ready_for_battle && current_user.ready_for_battle != game.current_castle.floor().to_i()
        next_step = "form"

        if game.current_castle === max_castles
          next_step = "victory"
        end
      else
        # binding.pry
        next_step = "out-of-sync"
      end
      if game.save
        render json: {
          game: game,
          opponent: opponent,
          next_step: next_step
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
