import React, { useState } from 'react'
import { useMembership } from '../context/MembershipContext'
import { useForm } from 'react-hook-form'

const MembershipForm = ({id, teamName}) => {
    const { joinTeam, isMemberOf} = useMembership()

    const isAlreadyMember = isMemberOf(id)

    const {register, handleSubmit, formState: {errors}} =useForm()
    const [email, setEmail] = useState("")

    const onSubmit = (data) => {
        console.log(data);
        setEmail(data.email)
        joinTeam(id)
    }
    return (
    <section className='membership-section'>
                <div className='form-container'>
                    <h2>Join Us!</h2>
                    <p>Support the team!</p>
                    {!isAlreadyMember ? (
                        <form onSubmit={handleSubmit(onSubmit)} className='membership-form'>
                            <div className='form-group'>
                                <label htmlFor="name">Name</label>
                                <input 
                                    type="text"
                                    id='name'
                                    className='form-input'
                                    {...register("name", {required: true})}
                                    />
                                    {errors.name && <span>Name required</span>}
                            </div>
                            <div className='form-group'>
                                <label htmlFor="email">Email</label>
                                <input 
                                    type="text"
                                    id='email'
                                    className='form-input'
                                    {...register("email", {required: true})} 
                                />
                                {errors.email && <span>Email required</span>}
                            </div>
                            <button type='submit' className='btn-submit'>Join!</button>
                        </form>
                    ) : (
                        <div className='succes-message'>
                            <h3>You are now part of the team!</h3>
                        </div>
                    )}
                </div>
        </section>
    )
}

export default MembershipForm