import { motion } from 'framer-motion'

function SignUp(props) {
    return (
        <motion.section 
            className="main sign-in"
            animate = {{ 
                scale: [0.1, 1.1, 1],
            }}
        >
            <form className = 'sign-in__form'>
                <h3 className = 'sign-in__header'>Sign In</h3>
                <div>
                    <input
                        type = "email" 
                        name = "email"
                        placeholder = 'E-mail'
                        onChange={props.handleChange}
                    />
                </div>
                <div>
                    <input 
                        type = "password" 
                        name = "password"
                        placeholder = 'Password'
                        onChange={props.handleChange}
                    />
                </div>
                <button 
                    type = "button" 
                    className = 'sign-in__btn'
                    onClick = {props.handleLogin}
                >Sign In</button>
                <p>Want to create new account? <span onClick={props.changeCard}>Register.</span></p>
            </form>
        </motion.section>
    )
}

export default SignUp