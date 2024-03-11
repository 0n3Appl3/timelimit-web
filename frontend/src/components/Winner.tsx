import { useEffect, useState } from 'react';
import { getTime } from '../helper/TimeManager.ts'
import '../styles/Winner.css'

interface Props {
    user: string;
    time: number;
}

function Winner({ user, time }: Props) {
    const [formattedTime, setFormattedTime] = useState("")
    useEffect(() => {
        setFormattedTime(getTime(time))
    }, [time])

    return (
        <>
            <div className="container__winner">
                <img src={ "https://mc-heads.net/avatar/" + user } alt="Minecraft player's head winner" />
                <div className="winner__item">
                    <p>{ user }</p>
                    <p>{ "Survived with " + formattedTime + " left to live" }</p>
                </div>
            </div>
        </>
    )
}

export default Winner