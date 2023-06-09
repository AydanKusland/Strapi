import { FaTimes } from 'react-icons/fa'
import links from './data'
import { useAppContext } from './context'

const Sidebar = () => {
	const { closeSidebar, isSidebarOpen } = useAppContext()
	return (
		<aside className={isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}>
			<div className='sidebar-container'>
				<button className='close-btn' onClick={closeSidebar}>
					<FaTimes />
				</button>
				<div className='sidebar-links'>
					{links.map(link => {
						const { page, links, pageId } = link
						return (
							<article key={pageId}>
								<h4>{page}</h4>
								<div className='sidebar-sublinks'>
									{links.map(sublink => {
										const { id, label, icon, url } = sublink
										return (
											<a key={id} href={url}>
												{icon}
												{label}
											</a>
										)
									})}
								</div>
							</article>
						)
					})}
				</div>
			</div>
		</aside>
	)
}
export default Sidebar
