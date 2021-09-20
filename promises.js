var PlayerService = {
    getPlayerTeamId: function (playerId) {
        return new Promise(resolve => {
            $.ajax({
                url: "/player/" + playerId + "/team",
                success: team => {
                    resolve(team.id)
                }
            });
        });
    },
    getPlayers: function (teamId) {
        return new Promise(resolve => {
            $.ajax({
                url: "/team/" + teamId + "/player",
                success: playerList => {
                    resolve(playerList);
                }
            });
        });
    }
};

var PlayerDetailsController = {
    playerId: 8,
    showTeammatesClick: function () {
        PlayerService.getPlayerTeamId(this.playerId)
            .then(teamId => {
                return PlayerService.getPlayers(teamId);
            })
            .then(playerList => {
                // Render playerList
            })
    }
};
