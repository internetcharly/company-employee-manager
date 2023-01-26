/* eslint-disable react/prop-types */
import { useState } from 'react'

export const GroupedTeamMembers = ({ employees, selectedTeam, setTeam }) => {
	const [groupedEmployees, setGroupedData] = useState(groupTeamMembers())
	return (
		<header className='container'>
			<div className='row justify-content-center mt-3 mb-4'>
				<div className='col-8'>
					<h1>Grouped Team Members</h1>
				</div>
			</div>
		</header>
	)
}
