import { useEffect, useState } from 'react'
import Winner from './components/Winner.tsx'
import PlayerStat from './components/PlayerStat.tsx'
import PlayerStatHeading from './components/PlayerStatHeading.tsx'
import Snapshot from './components/Snapshot.tsx'
import Background from './components/Background.tsx'
import Menu from './components/Menu.tsx'
import Footer from './components/Footer.tsx'
import GameInfo from './components/GameInfo.tsx'
import { getShortTime } from './helper/TimeManager.ts'
import './styles/App.css'

interface Result {
	id: number;
	gameId: number;
	user: string;
	kills: number;
	deaths: number;
	blocksCollected: number;
	timeLeft: number;
}
interface Timeline {
	id: string;
	time: number;
	user: string;
}

function App() {
	const [result, setResult] = useState<Array<Result>>([])
	const [timeline, setTimeline] = useState<Array<Timeline>>([])
	const [gameId, setGameId] = useState(0)

	const parameter = (value: number): void => {
		setGameId(value)
	}
	const getResult = (): void => {
		fetch("https://appl3pvp.com:3000/api/v1/games/results")
		.then((response) => response.json())
		.then((data) => {
			setResult(data)
		})
	}
	const getResultById = (): void => {
		fetch("https://appl3pvp.com:3000/api/v1/games/results/" + gameId)
		.then((response) => response.json())
		.then((data) => {
			setResult(data)
		})
	}
	const getTimeline = (): void => {
		fetch("https://appl3pvp.com:3000/api/v1/games/timelines")
		.then((response) => response.json())
		.then((data) => {
			setTimeline(data)
		})
	}
	const getTimelineById = (): void => {
		fetch("https://appl3pvp.com:3000/api/v1/games/timelines/" + gameId)
		.then((response) => response.json())
		.then((data) => {
			setTimeline(data)
		})
	}

	const getTotalKills = (): string => {
		let total = 0
		for (let i = 0; i < result.length; i++) {
			total += result[i].kills
		}
		return total.toString()
	}
	const getTotalDeaths = (): string => {
		let total = 0
		for (let i = 0; i < result.length; i++) {
			total += result[i].deaths
		}
		return total.toString()
	}
	const getTotalBlocksMined = (): string => {
		let total = 0
		for (let i = 0; i < result.length; i++) {
			total += result[i].blocksCollected
		}
		return total.toString()
	}

	useEffect(() => {
		if (gameId === 0) {
			getResult()
			getTimeline()	
		} else {
			getResultById()
			getTimelineById()
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [gameId])

	return (
		<>
			<Background />
			<main>
				<h1>Game Results</h1>
				<Menu parameter={ parameter } />
				<div className="container__section">
					<Winner user={ result[0]?.user } time={ result[0]?.timeLeft }/>
					<div className="container__game-info">
						<GameInfo title="Game Time" content={ getShortTime(timeline[timeline.length - 1]?.time) } />
						<GameInfo title="Total Kills" content={ getTotalKills() } />
						<GameInfo title="Total Deaths" content={ getTotalDeaths() } />
						<GameInfo title="Total Blocks Mined" content={ getTotalBlocksMined() } />
					</div>
				</div>
				<div className="container__section">
					<PlayerStatHeading />
					{ result?.map((player, index) => (
						<PlayerStat rank={ (index + 1) } user={ player.user } kills={ player.kills } deaths={ player.deaths } blocksCollected={ player.blocksCollected } />
					))}
				</div>
				<h2>Timeline</h2>
				<div className="container__section">
					{ timeline?.map((snapshot) => (
						<Snapshot id={ snapshot.id } user={ snapshot.user } time={ snapshot.time } />
					))}
				</div>
			</main>
			<Footer />
		</>
	)
}

export default App
