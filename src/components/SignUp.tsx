function SignUp() {
	return (
		<div className='flex h-screen items-center justify-center bg-gradient-to-b from-base to-crust'>
			<form className='grid grid-cols-2 gap-10 rounded-3xl border border-pink from-mantle to-crust px-10 py-5'>
				<p className='col-span-2 col-start-1 text-center text-4xl text-pink'>
					Create an account
				</p>
				<input
					className='col-span-2 col-start-1 rounded bg-lavender px-2 py-2 placeholder-crust outline-none'
					type='text'
					id='username'
					placeholder='Email address'
					required
				/>
				<input
					className='col-span-2 col-start-1 rounded bg-lavender px-2 py-2 placeholder-crust outline-none'
					type='password'
					id='password'
					placeholder='Password'
					required
				/>
				<input
					className='col-span-2 col-start-1 rounded bg-lavender px-2 py-2 placeholder-crust outline-none'
					type='password'
					id='password'
					placeholder='Confirm password'
					required
				/>
				<button
					className='col-span-2 col-start-1 rounded bg-subtext1 px-3 py-1 font-bold hover:bg-subtext0'
					type='button'
				>
					SignUp
				</button>
				{/* <hr className='col-span-2 text-white' /> */}
				<p className='col-span-2 text-text'>
					Have an account?
					<span>
						<a className='cursor-pointer text-maroon'> SignIn</a>
					</span>
				</p>
			</form>
		</div>
	)
}

export default SignUp
