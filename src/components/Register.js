import { motion } from 'framer-motion'

function Register(props) {
    return (
        <motion.section
            className="main register"
            animate = {{ 
                scale: [0.1, 1.1, 1],
            }}
        >
            <form 
                //onSubmit = {props.handleRegister} 
                className = 'register__form'
            >
                <h3 className = 'register__header'>Register</h3>
                <div>
                    <input 
                        type = "text" 
                        name = "name"
                        placeholder = 'Name'
                        onChange={props.handleChange}
                    />
                </div>
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
                    className = 'register__btn' 
                    onClick = {props.handleRegister}
                >Register</button>
                <p>You already have account? <span onClick = {props.changeCard}>Sign in.</span></p>
            </form>
        </motion.section>
    )
}

export default Register