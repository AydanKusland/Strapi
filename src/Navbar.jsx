import { useAppContext } from './context'
import { FaBars } from 'react-icons/fa'
import links from './data'

const Navbar = () => {
	const { openSidebar, setSubmenuID } = useAppContext()

	const handleSubmenu = e => {
		console.dir(e.target)
		const targetContainsClass = e.target.classList.contains('nav-links')
		// const parentContainsClass = e.target.parentNode?.contains('nav-link')
		// const contains = targetContainsClass && parentContainsClass
		if (targetContainsClass) setSubmenuID(null)
	}

	return (
		<nav>
			<div className='nav-center'>
				<h3 className='logo'>strapi</h3>
				<button className='toggle-btn' onClick={openSidebar}>
					<FaBars />
				</button>
				<div className='nav-links' onMouseOver={e => handleSubmenu(e)}>
					{links.map(link => {
						const { page, links, pageId } = link
						return (
							<button
								className='nav-link'
								key={pageId}
								onMouseEnter={() => {
									setSubmenuID(pageId)
								}}
							>
								<h4>{page}</h4>
							</button>
						)
					})}
				</div>
			</div>
		</nav>
	)
}
export default Navbar
