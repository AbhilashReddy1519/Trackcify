

function Footer() {
  return (
		<>
			<footer className="bg-[#32284a] mt-10 p-16 ">
				<section className="grid grid-cols-3 text-white font-light px-14">
					<div className="flex justify-evenly flex-col">
						<div className="">
							<a href="/">
								<img
									src="/logo.png"
									alt="LOGO"
									className="w-full h-20"
								/>
							</a>
						</div>
						<div className="flex justify-evenly p-3 mt-4">
							<a
								href="https://www.linkedin.com/in/-abhilash-reddy/"
								target="_blank"
							>
								<i className="fa-brands fa-facebook text-4xl hover:text-blue-500"></i>
							</a>
							<a
								href="https://www.linkedin.com/in/-abhilash-reddy/"
								target="_blank"
							>
								<i className="fa-brands fa-linkedin text-4xl hover:text-blue-500/55"></i>
							</a>
							<a
								href="https://www.linkedin.com/in/-abhilash-reddy/"
								target="_blank"
							>
								<i className="fa-brands fa-instagram text-4xl hover:text-pink-500"></i>
							</a>
							<a
								href="https://www.linkedin.com/in/-abhilash-reddy/"
								target="_blank"
							>
								<i className="fa-brands fa-square-reddit text-4xl hover:text-orange-500"></i>
							</a>
							<a
								href="https://www.linkedin.com/in/-abhilash-reddy/"
								target="_blank"
							>
								<i className="fa-brands fa-youtube text-4xl hover:text-red-600"></i>
							</a>
						</div>
						<div className="flex justify-center items-end h-full">
							© Trackcify {new Date().getFullYear()}
						</div>
					</div>
					<div>
                        <h3 className="font-bold text-xl">Company</h3>
                        <ul>
                            <li>
                                <a href="#" className="hover:font-medium hover:text-[#b6c7e4]">Trackify</a>
                            </li>
                            <li>
                                <a href="#" className="hover:font-medium hover:text-[#b6c7e4]">About</a>
                            </li>
                            <li>
                                <a href="#" className="hover:font-medium hover:text-[#b6c7e4]">Blog</a>
                            </li>
                            <li>
                                <a href="#" className="hover:font-medium hover:text-[#b6c7e4]">PodCast</a>
                            </li>
                            <li>
                                <a href="#" className="hover:font-medium hover:text-[#b6c7e4]">Journeys</a>
                            </li>
                            <li>
                                <a href="#" className="hover:font-medium hover:text-[#b6c7e4]">Reviews</a>
                            </li>
                            <li>
                                <a href="#" className="hover:font-medium hover:text-[#b6c7e4]">In the News</a>
                            </li>
                            <li>
                                <a href="#" className="hover:font-medium hover:text-[#b6c7e4]">Jobs</a>
                            </li>
                            <li>
                                <a href="#" className="hover:font-medium hover:text-[#b6c7e4]">Locations</a>
                            </li>
                            <li>
                                <a href="#" className="hover:font-medium hover:text-[#b6c7e4]">Gift Cards/Apparel</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-xl">Resources</h3>
                        <ul>
                            <li>
                                <a href="#" className="hover:font-medium hover:text-[#b6c7e4]">FAQ</a>
                            </li>
                            <li>
                                <a href="#" className="hover:font-medium hover:text-[#b6c7e4]">Help Center</a>
                            </li>
                            <li>
                                <a href="#" className="hover:font-medium hover:text-[#b6c7e4]">Contact</a>
                            </li>
                            <li>
                                <a href="#" className="hover:font-medium hover:text-[#b6c7e4]">Exercise Library</a>
                            </li>
                            <li>
                                <a href="#" className="hover:font-medium hover:text-[#b6c7e4]">Patnerships</a>
                            </li>
                            <li>
                                <a href="#" className="hover:font-medium hover:text-[#b6c7e4]">Ambassadors</a>
                            </li>
                            <li>
                                <a href="#" className="hover:font-medium hover:text-[#b6c7e4]">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#" className="hover:font-medium hover:text-[#b6c7e4]">Terms & Conditions</a>
                            </li>
                            <li>
                                <a href="#" className="hover:font-medium hover:text-[#b6c7e4]">Manage Account</a>
                            </li>
                        </ul>
                    </div>
				</section>
			</footer>
		</>
  );
}

export default Footer