function SignUp(props) {
    return (
        <section>
        <form className = 'signup'>
            <h3>Sign Up</h3>
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
            <button>Sign Up</button>
            <p>Want to create new account? <span onClick={props.handleclick}>Register</span></p>
        </form>
    </section>
    )
}

export default SignUp