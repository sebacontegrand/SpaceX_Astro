
import { type SpaceX, type Links } from '../types/api';

export const getlatestLaunches = async()=>{
	const response = await fetch('https://api.spacexdata.com/v5/launches/query', {
	method: "POST",
	headers: {
		"content-Type": "application/json",
	},
	body: JSON.stringify({
		query: {},
		options: {
			sort: {
				date_unix: "asc",
			},
			limit: 100,
		},
	}),
})
const { docs: launches } = (await response.json()) as SpaceX
return launches
}

export const getLaunchBy = async({id}:{id:string})=>{
	const response = await fetch(`https://api.spacexdata.com/v5/launches/${id}`)
const launchVideo= (await response.json()) as Links
console.log(launchVideo)
return launchVideo
}
