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
                <motion.button
                    whileHover={{ 
                        scale: 1.05,
                        backgroundColor: "#F8F7FF",
                        color: "#202731",
                        boxShadow: "2px 8px 10px rgba(0, 0, 0, .3)"}}
                    whileTap={{ 
                        scale: 0.9,
                        boxShadow: "2px 3px 7px rgba(0, 0, 0, .3)"}}
                    type = "button" 
                    className = 'register__btn' 
                    onClick = {props.handleRegister}
                >Register</motion.button>
                <p>You already have account? <span onClick = {props.changeCard}>Sign in.</span></p>
            </form>
        </motion.section>
    )
}

export default Register