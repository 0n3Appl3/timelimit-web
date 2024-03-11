import '../styles/PlayerStat.css'

interface Props {
    rank: number;
    user: string;
    kills: number;
    deaths: number;
    blocksCollected: number;
}

function PlayerStat({ rank, user, kills, deaths, blocksCollected }: Props) {
    return (
        <>
        <div>
            <div className="container__stat">
                <div className={(rank == 1 ? "rank__first" : rank == 2 ? "rank__second" : rank == 3 ? "rank__third" : "")}>{ rank }</div>
                <div>
                    <img src={"https://mc-heads.net/avatar/" + user + "/55"} alt="Player head" />
                    <div>{ user }</div>
                 </div>
                <div>{ kills }</div>
                <div>{ deaths }</div>
                <div>{ blocksCollected }</div>
            </div>
        </div>
        </>
    )
}

export default PlayerStat