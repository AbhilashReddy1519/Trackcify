import React, { useState } from "react";


import Button from "../ui/button";

function NavBar() {
    // 2. Create state to track visibility
    const [isHovered, setIsHovered] = useState(false);

	return (
		<>
			<section className="bg-[#32284a] text-white flex justify-between items-center px-15 h-25">
				<div className="cursor-pointer">
					<a href="/">
						<img
							src="/logo.png"
							alt="LOGO"
							width={200}
							height={200}
							className=""
						/>
					</a>
				</div>

				<div className="flex justify-center items-center gap-8 text-[1rem] font-medium">
					<nav>
						<ul className="flex flex-row gap-7 justify-center items-center">
							<li>
								<a href="/" className="hover:text-[#dedaee]">
									Home
								</a>
							</li>
							<li
								className={
									isHovered
										? "relative bg-[#32284a] px-2"
										: "px-2"
								} // Added relative so dropdown positions correctly
								onMouseEnter={() => setIsHovered(true)}
								onMouseLeave={() => setIsHovered(false)}
							>
								<p className="cursor-pointer">
									What is Trackcify?
									<i className="fa-solid fa-caret-down"></i>
								</p>

								{/* 4. Use the state to decide the class */}
								<ul
									className={
										isHovered
											? "block absolute bg-[#32284a] rounded px-8 py-4 top-full left-0 border border-[#150d26]"
											: "hidden"
									}
								>
									<li>
										<a
											href="#"
											className="block w-full py-1 hover:text-[#dedaee]"
										>
											About
										</a>
									</li>
									<hr className="border-[#150d26]" />
									<li>
										<a
											href="#"
											className="block w-full py-1 hover:text-[#dedaee]"
										>
											Contact
										</a>
									</li>
									<hr className="border-[#150d26]" />
									<li>
										<a
											href="#"
											className="block w-full py-1 hover:text-[#dedaee]"
										>
											FAQ (optional)
										</a>
									</li>
								</ul>
							</li>
							<li>
								<a href="#" className="hover:text-[#dedaee]">
									Trainers
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-[#dedaee]">
									Exercise Library
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-[#dedaee]">
									Reviews
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-[#dedaee]">
									Jobs
								</a>
							</li>
						</ul>
					</nav>
					<Button className="bg-[#c3d7ff] text-[1rem] text-center py-2 px-4 text-[#32284a] transition-all duration-300 hover:scale-115 ease-in-out cursor-pointer">
						Get Started
					</Button>
				</div>
			</section>
		</>
	);
}

export default NavBar;
