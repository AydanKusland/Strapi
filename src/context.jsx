import { useState, useContext, createContext } from 'react'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false)
	const [submenuID, setSubmenuID] = useState(null)
	// console.log(submenuID)

	const closeSidebar = () => {
		setIsSidebarOpen(false)
	}
	const openSidebar = () => {
		setIsSidebarOpen(true)
	}

	return (
		<AppContext.Provider
			value={{
				isSidebarOpen,
				openSidebar,
				closeSidebar,
				submenuID,
				setSubmenuID
			}}
		>
			{children}
		</AppContext.Provider>
	)
}

export const useAppContext = () => {
	return useContext(AppContext)
}
