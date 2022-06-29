import { motion } from 'framer-motion'

function SignUp(props) {
    return (
        <motion.div 
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
                <button className = 'sign-in__btn'>Sign In</button>
                <p>Want to create new account? <span onClick={props.changeLogin}>Register.</span></p>
            </form>
        </motion.div>
    )
}

export default SignUp