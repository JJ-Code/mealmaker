const team = {
    _players: [{
            firstName: 'Pete',
            lastName: 'Wheeler',
            age: 54
        },
        {
            firstName: 'Pablo',
            lastName: 'Sanchez',
            age: 11
        },
        {
            firstName: 'Adam',
            lastName: 'Roberts',
            age: 24
        }

    ],

    _games: [{
            opponent: 'Broncos',
            teamPoints: 42,
            opponentPoints: 27
        },
        {
            opponent: 'Giants',
            teamPoints: 23,
            opponentPoints: 32
        },
        {
            opponent: 'Cowboys',
            teamPoints: 31,
            opponentPoints: 21
        }
    ],

    get players() {
        return this._players;

    },
    get games() {
        return this._players;

    },
addPlayer(firstName, lastName, age) {
    const player ={
        firstName, //shorthand to pass same property as value
        lastName,
        age
    };
    this._players.push(player)
},

addGame(opponent, teamPoints, opponentPoints) {
    const game = {
        opponent,
        teamPoints,
        opponentPoints
    };
    this._games.push(game)
},



};

team.addPlayer('Steph', 'Curry', 30)
team.addPlayer('Lisa', 'Leslie', 44)
team.addPlayer('Bugs', 'Bunny', 76)

console.log(team._players)

team.addGame('Lions', 56, 45)
team.addGame('Jets', 44, 36)
team.addGame('Ravens', 23, 41)

console.log(team._games)
                                                                                                                                                                                     