
import Player from '../Player/Player';

const Players = ({ players, handleChoosePlayer, handleTotalPrice }) => {

 
    return (
        <div>

            <div className='md:grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    players.map(player => 
                    <Player 
                    player={player} 
                    key={player.id} 
                    handleChoosePlayer={handleChoosePlayer}
                    handleTotalPrice = {handleTotalPrice}
                    > </Player>)
                }
            </div>
        </div>
    );
};

export default Players;