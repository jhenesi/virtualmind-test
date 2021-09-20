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
    showTeammatesClick: async function () {
        const teamId = await PlayerService.getPlayerTeamId(this.playerId);
        const playerList = await PlayerService.getPlayers(teamId);

        // Render playerList
    }
};