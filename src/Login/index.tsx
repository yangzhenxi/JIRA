import React, { FormEvent } from 'react'

interface ILoginParams {
	username: string
	password: string
}

const Login = () => {
	const login = (params: ILoginParams) => {
		fetch('http://localhost:3001/login', {
			method: 'POST',
			headers: new Headers({
				'Content-Type': 'application/json',
			}),
			body: JSON.stringify(params),
		}).then((res) => {
			console.log(res)
		})
	}

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		const username = (
			document?.getElementById('userName') as HTMLInputElement
		).value
		const password = (
			document?.getElementById('passWord') as HTMLInputElement
		).value
		login({ username, password })
		console.log(username, password)
	}
	return (
		<div>
			<form action="#" onSubmit={handleSubmit}>
				<div>
					<label htmlFor="userName">账号</label>
					<input type="text" name="userName" id="userName" />
				</div>
				<div>
					<label htmlFor="passWord">密码</label>
					<input type="password" name="passWord" id="passWord" />
				</div>
				<input type="submit" value="提交" />
			</form>
		</div>
	)
}

export default Login
