function SignIn() {
	return (
		<div className='flex h-screen items-center justify-center bg-gradient-to-b from-base to-crust'>
			<form className='grid grid-cols-2 gap-10 rounded-3xl border border-pink from-mantle to-crust px-6 py-5'>
				<p className='col-span-2 col-start-1 text-center text-4xl text-pink'>
					SignIn
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
				<p className='col-start-1 cursor-pointer text-maroon hover:text-peach'>
					Forgot password?
				</p>
				<button
					className='col-start-2 rounded bg-subtext1 px-3 py-1 font-bold hover:bg-subtext0'
					type='button'
				>
					Login
				</button>
				<hr className='col-span-2 text-white' />
				<p className='col-span-2 text-text'>
					Don't have an account?
					<span>
						<a className='cursor-pointer text-maroon'> SignUp</a>
					</span>
				</p>
			</form>
		</div>
	)
}

export default SignIn
