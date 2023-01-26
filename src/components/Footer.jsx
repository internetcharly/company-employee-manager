export const Footer = () => {
	const date = new Date()
	return (
		<footer className='container'>
			<div className='row justify-content-center mt-3 mb-4'>
				<div className='col-8'>
					<h1>Team Member Allocation App - {date.getFullYear()}</h1>
				</div>
			</div>
		</footer>
	)
}
