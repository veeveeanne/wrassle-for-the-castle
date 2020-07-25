# Wrassle for the Castle
A multiplayer, turn based game of capture the castle, where two generals send their armies to battle over the most valuable castles 
Visit the deployed application [here](http://wrassle-for-the-castle.herokuapp.com/)

This application was built for the [MintBean Multiplayer Hackathon](https://sites.google.com/mintbean.io/2020-07-10-multiplayer-hackath/home?authuser=2) on July 10-13, 2020. The game context was inspired by a game theory riddle, [The Battle for Riddler Nation](https://fivethirtyeight.com/features/the-battle-for-riddler-nation-round-2/), from The Riddler.

## Authors
- Andrew Lee
- Jason Flashner
- Vivian Wang

## Built With
- [Ruby on Rails](https://guides.rubyonrails.org/v5.2/)
- [React.js](https://reactjs.org/docs/getting-started.html)
- [PostgreSQL](https://www.postgresql.org/docs/12/index.html)

### Getting started:
The setup steps expect the following tools/versions:
- Ruby 2.6.5
- Rails 5.2.4.2
- PostgreSQL 12

###### Checkout the repository
```
git clone https://github.com/flashnej/wrassle-for-the-castle.git
```

###### Create and setup the database
```
bundle exec rake db:setup
```

###### Start the Rails server and webpack-dev-server
```
bundle exec rails s
yarn run start
```
###### The application can be accessed via <http://localhost:3000>
