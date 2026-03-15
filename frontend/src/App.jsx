import { useState } from "react"
import LoginPage from "./auth/pages/LoginPage"
import Header from "./components/layout/Header"

function App() {
	const [currentPage, setCurrentPage] = useState("login")

	if (currentPage === "login") {
		return <LoginPage onLogin={() => setCurrentPage("app")} />
	}

	return (
		<>
			<Header />
			<div className="bg-dilg-yellow p-6">
				<h1 className="text-dilg-red text-3xl font-bold">My App</h1>
			</div>
		</>
	)
}

export default App
