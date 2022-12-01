import React from "react";
import { SearchIcon } from "@heroicons/react/solid";

const Navbar = () => {
	function textbox() {
		document.getElementById('search-bar').classList.toggle('hidden')
	}
	return (
		<div className="h-[6.25rem] bg-slate-300 dark:bg-slate-800 flex items-center justify-between">
			<div className="mx-4 cursor-default select-none">
				<a href="../App.jsx">
					<h1 className="text-6xl">ReBook</h1>
				</a>
			</div>
			<div className="">
				<ul className="flex">
					<li className="cursor-pointer hover:bg-blue-500 mx-4 rounded-2xl hover:shadow-inner hover:shadow-black select-none">Genre</li>
					<li className="cursor-pointer hover:bg-blue-500 mx-4 rounded-2xl hover:shadow-inner hover:shadow-black select-none">Recommendations</li>
					<li className="cursor-pointer hover:bg-blue-500 mx-4 rounded-2xl hover:shadow-inner hover:shadow-black select-none">Get a Random book</li>
					<li>
						<SearchIcon
							className="w-6 cursor-pointer"
							onClick={textbox}
						/>
					</li>
				</ul>
				<input type="text" className="absolute right-4 mt-8 outline-none indent-4 hidden ease-in-out duration-150" id="search-bar" />
			</div>
		</div>
	);
};

export default Navbar;
