import consumer from "./consumer"

const subscribeToGameChannel = (setGame) => {
    console.log("subscribed to channel")
  consumer.subscriptions.create(
    { channel: "GameChannel" },
    {
      received: data => {
        console.log("received data:" + data.game.id)
        setGame(data.game)
      },
      speak: function(data) {
        return this.perform("speak", data)
      }
    }
  )
}

const speakToGameChannel = (game) => {
  consumer.subscriptions.subscriptions[0].speak(game)
}

export {
  subscribeToGameChannel,
  speakToGameChannel
}
