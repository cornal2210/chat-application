import { useForm } from "react-hook-form"
import { CreateUserParams } from "../../../utils/types"
import { NameField } from "./NameField"
import { PasswordField } from "./PasswordField"
import { UsernameField } from "./UsernameField"
import styles from '../index.module.scss';
import { Link, useNavigate } from "react-router-dom"
import { Button } from "../../../utils/styles"
import { toast } from 'react-toastify'
import { postRegisterUser } from "../../../utils/api"

export const RegisterForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<CreateUserParams>({ reValidateMode:   "onBlur" })
    const navigate = useNavigate();
    const onSubmit = async(data: CreateUserParams) => {
        console.log(data)
        try {
            await postRegisterUser(data)
            navigate('/login')
            toast('Account created!', { type: 'success', icon: true });
        } catch (error) {
            console.log(error);
            toast.clearWaitingQueue();
            toast('Error creating user', { type: 'error', icon: true });
        }
    }

    const formFieldProps = { errors, register }

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <UsernameField {...formFieldProps} />
            <NameField {...formFieldProps} />
            <PasswordField {...formFieldProps} />
            <div className={styles.footerText}>
            <Button className={styles.button}>Create My Account</Button>
                <span>Already have an account? </span>
                <Link to="/login">
                <span>Login</span>
                </Link>
            </div>
        </form>
    )
}