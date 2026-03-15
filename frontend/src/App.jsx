import { useState } from "react"
import LoginPage from "./auth/pages/LoginPage"
import Chat from "./pages/Chat"

function App() {
	const [currentPage, setCurrentPage] = useState("login")

	if (currentPage === "login") {
		return <LoginPage onLogin={() => setCurrentPage("app")} />
	}

	return <Chat />
}

export default App
