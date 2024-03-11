import '../styles/GameInfo.css'

interface Props {
    title: string;
    content: string;
}

function Winner({ title, content }: Props) {
    return (
        <>
            <div className="container__game-info-content">
                <p>{ title }</p>
                <p>{ content }</p>
            </div>
        </>
    )
}

export default Winner