import React, { use } from 'react';
import Player from '../Player/Player';

const Players = ({ resolvePlayers, handleChoosePlayer }) => {
    const players = use(resolvePlayers);

    console.log(players);
    return (
        <div>
            <h2>Total Players:  {players.length}</h2>
            <div className='md:grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    players.map(player => <Player player={player} key={player.id} handleChoosePlayer={handleChoosePlayer}> </Player>)
                }
            </div>
        </div>
    );
};

export default Players;