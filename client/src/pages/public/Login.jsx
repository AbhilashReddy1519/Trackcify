import React from 'react'
import { Link } from 'react-router-dom';

function Login() {
  return (
		<>
			<section className="grid grid-cols-2 w-full h-fit bg-white">
				<div className="w-full h-full bg-white p-10 relative">
					<div className="mb-10">
						<h1 className="text-6xl text-center pb-4">
							Welcome Back
						</h1>
						<p className="text-[1rem] font-light pb-3 text-center">
							Enter your email/username and password to access
							your account
						</p>
					</div>
					<form className="flex flex-col gap-3" method="post">
						<div className="flex flex-col gap-3">
							<label htmlFor="userIdentifier" className="text-xl">
								Username:
							</label>
							<input
								type="text"
								name="userIdentifier"
								id="userIdentifier"
								placeholder="Enter your username/email"
								className="w-full bg-blue-100/70 font-light text-black border outline-none border-white focus:border-indigo-700  hover:border hover:border-blue-500 rounded-sm text-m p-2"
							/>
						</div>

						<div className="flex flex-col gap-3">
							<label htmlFor="password" className="text-xl">
								Password:{" "}
							</label>
							<input
								type="password"
								name="password"
								id="password"
								placeholder="Enter your password"
								className="w-full bg-blue-100 font-light border outline-none border-white focus:border-indigo-700  hover:border hover:border-blue-500 rounded-sm text-m p-2"
							/>
						</div>

						<div className="flex justify-between">
							<div className="flex gap-2 text-m justify-center items-center">
								<input
									type="checkbox"
									name="remember"
									id="remember"
									className="mt-1"
								/>
								<label htmlFor="remember">Remember me</label>
							</div>
							<p className="text-m">
								<Link
									to="/forgetpassword"
									className="hover:text-[#dd00ff] underline"
								>
									Forgot Password?
								</Link>
							</p>
						</div>

						<button
							type="submit"
							className="w-full text-white bg-black p-2 cursor-pointer text-m rounded-[17px_4px] mb-0.5 transform hover:scale-104 transition-all duration-300 ease-in-out border border-white"
						>
							Login
						</button>
						<button
							type="submit"
							className="flex justify-center items-center gap-3 my-2 transform text-m rounded-[4px_17px] hover:scale-104 transition-all duration-300 ease-in-out border p-2 mb-25"
						>
							<img
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/2048px-Google_%22G%22_logo.svg.png"
								alt="google"
								width={20}
								height={20}
							/>{" "}
							Login with Google
						</button>
					</form>

					<div className="absolute flex justify-center left-1/2 transform -translate-x-1/2 -translate-y-1/2 bottom-2 text-center">
						<h1 className="">
							Don't have an account?{" "}
							<Link
								to="/knowus"
								className="text-[#9308d8] underline transform hover:text-[#dd00ff]"
							>
								Sign Up
							</Link>
						</h1>
					</div>
				</div>
				<div className="relative">
					<div className='w-80 bg-linear-to-r from-white via-transparent to-transparent h-full z-1 absolute top-0 left-0'>

					</div>
					<img
						src="/images/login.jpg"
						alt="people"
						className="h-full bg-center object-center object-cover"
					/>
				</div>
			</section>
		</>
  );
}

export default Login;