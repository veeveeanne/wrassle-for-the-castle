import consumer from "./consumer"

consumer.subscriptions.create("GameChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
    console.log("subscribed to channel")
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
    console.log("disconnected from channel")
  },

  received(data) {
    console.log("received data:" + data.game.id)
    // Called when there's incoming data on the websocket for this channel
  }
});
