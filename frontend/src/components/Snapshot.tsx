import { useState, useEffect } from 'react'
import { getTime, getShortTime } from '../helper/TimeManager.ts'
import '../styles/Snapshot.css'

interface Props {
    id: string;
    user: string;
    time: number;
}

function Snapshot({ id, user, time }: Props) {
    const [type, setType] = useState("")
    const [icon, setIcon] = useState("")
    const [message, setMessage] = useState("")

    useEffect(() => {
        let seconds: number = 0
        let users: Array<string> = []
        setType(id[0])
        setIcon("Skeleton")
        
        if (!type.startsWith("0")) {
            seconds = Number(id.replace(type, ""))
        }
        switch (type) {
            case "T":
                setMessage(user + " has " + getTime(seconds) + " left to live.")
                setIcon("Exclamation")
                break;
            case "K":
                users = user.split("-")
                setMessage(users[0] + " was killed by " + users[1] + " and has " + getTime(seconds) + " left to live.")
                break;
            case "D":
                setMessage(user + " died and has " + getTime(seconds) + " left to live.")
                break;
            default:
                setMessage(user + " ran out of time.")
                setIcon("WSkeleton")
                break;
        }
    }, [id, user, type])

    return (
        <>
            <div>
                <div className="container__snapshot">
                    <img src={"https://mc-heads.net/avatar/MHF_" + icon + "/40"} alt="Snapshot icon" />
                    <div className="snapshot__item">
                        <span>{ getShortTime(time) }</span><br />
                        <span>{ message }</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Snapshot