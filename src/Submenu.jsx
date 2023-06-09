import { useRef } from 'react'
import { useAppContext } from './context'
import links from './data'

const Submenu = () => {
	const { submenuID, setSubmenuID } = useAppContext()
	const link = links.find(item => item.pageId === submenuID)

	const submenuContainer = useRef(null)

	const handleMouseLeave = e => {
		const submenu = submenuContainer.current
		const { right, left, bottom, top } = submenu.getBoundingClientRect()
		const { clientX, clientY } = e
		// if (!e.target.classList.contains('submenu'))
		if (clientX > right - 1 || clientX < left + 1 || clientY > bottom - 1)
			setSubmenuID(null)
	}

	return (
		<div
			className={link ? 'submenu show-submenu' : 'submenu'}
			onMouseLeave={handleMouseLeave}
			ref={submenuContainer}
		>
			<h5>{link?.page}</h5>
			<div
				className='submenu-links'
				style={{
					gridTemplateColumns: link?.links?.length > 3 ? '1fr 1fr' : '1fr'
				}}
			>
				{link?.links?.map(item => {
					const { id, url, label, icon } = item
					return (
						<a key={id} href={url}>
							{icon}
							{label}
						</a>
					)
				})}
			</div>
		</div>
	)
}
export default Submenu
