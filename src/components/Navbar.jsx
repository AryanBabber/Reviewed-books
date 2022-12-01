import React from "react";
import { SearchIcon } from "@heroicons/react/solid";
import github from '../assets/github.png'

const Navbar = () => {
	function textbox() {
		document.getElementById('search-bar').classList.toggle('hidden')
	}
	return (
		<div className="h-[6.25rem] bg-slate-300 dark:bg-slate-800 flex items-center justify-between">
			<div className="mx-4 cursor-default select-none">
				<a href="../App.jsx">
					<h1 className="text-6xl dark:text-blue-500">ReBook</h1>
				</a>
			</div>
			<div className="">
				<ul className="flex">
					<li className="cursor-pointer dark:text-white dark:hover:bg-blue-400 hover:bg-blue-500 mx-4 rounded-2xl hover:shadow-inner hover:shadow-black select-none">Genre</li>
					<li className="cursor-pointer dark:text-white dark:hover:bg-blue-400 hover:bg-blue-500 mx-4 rounded-2xl hover:shadow-inner hover:shadow-black select-none">Recommendations</li>
					<li className="cursor-pointer dark:text-white dark:hover:bg-blue-400 hover:bg-blue-500 mx-4 rounded-2xl hover:shadow-inner hover:shadow-black select-none">Get a Random book</li>
					<a href="https://github.com/AryanBabber/Reviewed-books">
					<li className="cursor-pointer dark:text-white dark:hover:bg-blue-400 hover:bg-blue-500 mx-4 rounded-2xl hover:shadow-inner hover:shadow-black select-none flex gap-5">
						<img src={github} alt="github logo" className="h-6 w-6" /><span>Contribute to the project</span>
					</li>
					</a>
					<li>
						<SearchIcon
							className="w-6 cursor-pointer dark:text-white"
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
