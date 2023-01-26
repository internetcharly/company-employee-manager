import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import { Employees } from './components/Employees'
import { Footer } from './components/Footer'
import { GroupedTeamMembers } from './components/GroupedTeamMembers'
import { Header } from './components/Header'
import { Nav } from './components/Nav'
import { NotFound } from './components/NotFound'

function App() {
	const [selectedTeam, setSelectedTeam] = useState(
		JSON.parse(localStorage.getItem('selectedTeam')) || 'TeamA'
	)

	const [employees, setEmployees] = useState(
		JSON.parse(localStorage.getItem('selectedTeam')) || [
			{
				id: 1,
				fullName: 'Bob Jones',
				designation: 'JavaScript Developer',
				gender: 'male',
				teamName: 'TeamA',
			},
			{
				id: 2,
				fullName: 'Jill Bailey',
				designation: 'Node Developer',
				gender: 'female',
				teamName: 'TeamA',
			},
			{
				id: 3,
				fullName: 'Gail Shepherd',
				designation: 'Java Developer',
				gender: 'female',
				teamName: 'TeamA',
			},
			{
				id: 4,
				fullName: 'Sam Reynolds',
				designation: 'React Developer',
				gender: 'male',
				teamName: 'TeamB',
			},
			{
				id: 5,
				fullName: 'David Henry',
				designation: 'DotNet Developer',
				gender: 'male',
				teamName: 'TeamB',
			},
			{
				id: 6,
				fullName: 'Sarah Blake',
				designation: 'SQL Server DBA',
				gender: 'female',
				teamName: 'TeamB',
			},
			{
				id: 7,
				fullName: 'James Bennet',
				designation: 'Angular Developer',
				gender: 'male',
				teamName: 'TeamC',
			},
			{
				id: 8,
				fullName: 'Jessica Faye',
				designation: 'API Developer',
				gender: 'female',
				teamName: 'TeamC',
			},
			{
				id: 9,
				fullName: 'Lita Stone',
				designation: 'C++ Developer',
				gender: 'female',
				teamName: 'TeamC',
			},
			{
				id: 10,
				fullName: 'Daniel Young',
				designation: 'Python Developer',
				gender: 'male',
				teamName: 'TeamD',
			},
			{
				id: 11,
				fullName: 'Adrian Jacobs',
				designation: 'Vue Developer',
				gender: 'male',
				teamName: 'TeamD',
			},
			{
				id: 12,
				fullName: 'Devin Monroe',
				designation: 'Graphic Designer',
				gender: 'male',
				teamName: 'TeamD',
			},
		]
	)

	useEffect(() => {
		localStorage.setItem('employeeList', JSON.stringify(employees))
	}, [employees])

	useEffect(() => {
		localStorage.setItem('selectedTeam', JSON.stringify(selectedTeam))
	}, [selectedTeam])

	function handleTeamSelectionChange(event) {
		setSelectedTeam(event.target.value)
	}

	function handleEmployeeCardClick(event) {
		const transformedEmployees = employees.map((employee) =>
			employee.id === parseInt(event.currentTarget.id)
				? employee.teamName === selectedTeam
					? { ...employee, teamName: '' }
					: { ...employee, teamName: selectedTeam }
				: employee
		)
		setEmployees(transformedEmployees)
	}

	return (
		<div>
			<Router>
				<Nav />
				<Header
					selectedTeam={selectedTeam}
					teamMemberCount={
						employees.filter((employee) => employee.teamName === selectedTeam)
							.length
					}
				/>
				<Routes>
					<Route
						path='/'
						element={
							<Employees
								employees={employees}
								selectedTeam={selectedTeam}
								handleEmployeeCardClick={handleEmployeeCardClick}
								handleTeamSelectionChange={handleTeamSelectionChange}
							/>
						}
					/>
					<Route
						path='/GroupedTeamMembers'
						element={
							<GroupedTeamMembers
								employees={employees}
								selectedTeam={selectedTeam}
								setTeam={setSelectedTeam}
							/>
						}
					/>
					<Route path='*' element={<NotFound />} />
				</Routes>
				<Footer />
			</Router>
		</div>
	)
}

export default App
