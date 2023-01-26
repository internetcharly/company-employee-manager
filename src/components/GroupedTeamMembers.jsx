/* eslint-disable react/prop-types */
import { useState } from 'react'

export const GroupedTeamMembers = ({
	employees,
	selectedTeam,
	setSelectedTeam,
}) => {
	const [groupedEmployees, setGroupedData] = useState(groupTeamMembers())

	function groupTeamMembers() {
		const teams = []

		const teamAMembers = employees.filter(
			(employees) => employees.teamName === 'TeamA'
		)
		const teamA = {
			team: 'TeamA',
			members: teamAMembers,
			collapsed: selectedTeam === 'TeamA',
		}
		teams.push(teamA)

		const teamBMembers = employees.filter(
			(employees) => employees.teamName === 'TeamB'
		)
		const teamB = {
			team: 'TeamB',
			members: teamBMembers,
			collapsed: selectedTeam !== 'TeamB',
		}
		teams.push(teamB)

		const teamCMembers = employees.filter(
			(employees) => employees.teamName === 'TeamC'
		)
		const teamC = {
			team: 'TeamC',
			members: teamCMembers,
			collapsed: selectedTeam !== 'TeamC',
		}
		teams.push(teamC)

		const teamDMembers = employees.filter(
			(employees) => employees.teamName === 'TeamD'
		)
		const teamD = {
			team: 'TeamD',
			members: teamDMembers,
			collapsed: selectedTeam !== 'TeamD',
		}
		teams.push(teamD)

		return teams
	}

	const handleTeamClick = (event) => {
		const transformedGroupData = groupedEmployees.map((groupedData) =>
			groupedData.team === event.currentTarget.id
				? { ...groupedData, collapsed: !groupedData.collapsed }
				: groupedData
		)
		setGroupedData(transformedGroupData)
		setSelectedTeam(event.currentTarget.id)
	}
	return (
		<main className='container'>
			{groupedEmployees.map((item) => {
				return (
					<div
						key={item.team}
						className='card mt-2'
						style={{ cursor: 'pointer' }}
					>
						<h4
							id={item.team}
							className='card-header text-seconday bg-white'
							onClick={handleTeamClick}
						>
							Team Name: {item.team}
						</h4>
						<div
							id={'collapse_' + item.team}
							className={item.collapsed === true ? 'collapse' : ''}
						>
							<hr />
							{item.members.map((member) => {
								return (
									<div key={member.fullName} className='mt2'>
										<h5 className='card-title mt-2'>
											<span className='text-dark'>
												Full Name: {member.fullName}
											</span>
										</h5>
										<p>Designation: {member.designation}</p>
									</div>
								)
							})}
						</div>
					</div>
				)
			})}
		</main>
	)
}
