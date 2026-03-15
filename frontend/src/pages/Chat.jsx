import Header from "../components/layout/Header"
import Footer from "../components/layout/Footer"

export default function Chat() {
	return (
		<div className="h-screen grid grid-rows-[5%_90%_5%]">
			<Header />

			<div class="grid grid-cols-[20%_60%_20%]">
				{/* =============== RECENT CHATS =============== */}
				<nav class="border border-gray-600 flex flex-col">
					<div class="bg-red-400 flex flex-row justify-between w-full px-4">
						<span>JurisGPT</span>
						<img src="../../assets/images/dilg-logo.png"
							alt="DILG Logo"
							class="h-6 w-6 object-contain"
						/>
					</div>

					{/* action buttons */}
					<div class="flex flex-col">
						<button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 text-start">
							New Chat
						</button>
						<button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 text-start">
							Search Chats
						</button>
					</div>

				</nav>

				{/* =============== CHAT WINDOW =============== */}
				<main class="border border-gray-600">

				</main>
				
				{/* =============== FILES =============== */}
				<nav class="border border-gray-600">

				</nav>

			</div>

			<Footer/>

		</div>
	)
}
