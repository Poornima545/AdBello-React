import { useNavigate, useParams } from "react-router-dom";
import { getUsers, updateUser } from "./userService";
import { useEffect } from "react";
import { useForm } from "react-hook-form";


function UserUpdate() {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm()
    const navigate = useNavigate()
    const { id } = useParams()

    const fetchUser = async () => {
        try {
            const userData = await getUsers()
            setValue('email', userData.email)
            console.log(userData.email);
        } catch (error) {
            console.error('There was an error fetching the user!', error);
        }
    }

    useEffect(() => {
        fetchUser();
    }, [])

    const onSubmit = async (data) => {
        try {
            await updateUser(id, data)
            alert('User Email is Updated')
            navigate('/users')
        } catch (error) {
            console.error('There was an error updating the user!', error);
        }
    }

    return (
        <div className="update-container">
            <h2>Update User</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type='email'
                    placeholder='Change Your Email Here..'
                    {...register('email', {
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: 'Invalid email'
                        }
                    })}
                    required
                />
                {errors.email && <div className='error'>{errors.email.message}</div>}
                <br />
                <button type="submit" class="btn btn-primary">Update</button>
            </form>
        </div>

    )
}

export default UserUpdate;