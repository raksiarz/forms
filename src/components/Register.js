function Register(props) {
    return (
        <section>
            <form onSubmit = {props.handlesubmit} className = 'register'>
                <h3>Register</h3>
                <div>
                    <input 
                        type = "text" 
                        name = "name"
                        placeholder = 'Name'
                        onChange={props.handlechange}
                    />
                </div>
                <div>
                    <input
                        type = "email" 
                        name = "email"
                        placeholder = 'E-mail'
                        onChange={props.handlechange}
                    />
                </div>
                <div>
                    <input 
                        type = "password" 
                        name = "password"
                        placeholder = 'Password'
                        onChange={props.handlechange}
                    />
                </div>
                <button>Register</button>
                <p>You already have account? <span onClick = {props.handleclick}>Sign up.</span></p>
            </form>
        </section>
    )
}

export default Register