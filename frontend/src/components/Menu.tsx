import { useEffect, useState } from 'react';
import { getFormattedDate } from '../helper/DateManager.ts'
import '../styles/Menu.css'

interface Props {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    parameter: any;
}

interface Game {
	id: number;
	date: string;
	timeline: Array<object>;
}

function Menu({ parameter }: Props) {
    const [games, setGames] = useState<Array<Game>>([])

    const getGames = (): void => {
        fetch("https://appl3pvp.com:3000/api/v1/games")
        .then((response) => response.json())
        .then((data) => {
            setGames(data.reverse())
        })
    }

    useEffect(() => {
        getGames()
    }, [])
    return (
        <>
            <div className="container__menu">
                <div>
                    <select id="games" name="games" onChange={ e => parameter(e.target.value) }>
                        { games?.map((game) => (
                            <option value={ game?.id }>{ getFormattedDate(game?.date) }</option>
                        )) }
                    </select>
                </div>
            </div>
        </>
    )
}

export default Menu