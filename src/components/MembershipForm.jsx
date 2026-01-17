import React, { useState } from 'react'
import { useMembership } from '../context/MembershipContext'
import { useForm } from 'react-hook-form'

const MembershipForm = ({id}) => { // Recogemos el id que nos pasa la pagina Team por props
    const { joinTeam, isMemberOf} = useMembership() // Custom hook para que la app recuerde que ese usuario ya es socio

    const isAlreadyMember = isMemberOf(id) //Devuelve booleano

    const {register, handleSubmit, formState: {errors}} =useForm() // react-hook-form
    const [email, setEmail] = useState("") // Estado para el email, empezando vacio

    const onSubmit = (data) => { //Función que se envia a handleSubmit
        console.log(data); // Mostramos internamente los datos
        setEmail(data.email) // Seteamos el email
        joinTeam(id) // Inicializamos 
    }
    return (
    <section className='membership-section'>
                <div className='form-container'>
                    <h2>Join Us!</h2>
                    <p>Support the team!</p>
                    {!isAlreadyMember ? (
                        <form onSubmit={handleSubmit(onSubmit)} className='membership-form'> {/* Llamamos onSubmit a handleSubmit*/}
                            <div className='form-group'>
                                <label htmlFor="name">Name</label>
                                <input 
                                    type="text"
                                    id='name'
                                    className='form-input'
                                    {...register("name", {required: true})} // Guardamos todo el objeto register, pero en name actualizamos
                                    />
                                    {errors.name && <span>Name required</span>}
                            </div>
                            <div className='form-group'>
                                <label htmlFor="email">Email</label>
                                <input 
                                    type="text"
                                    id='email'
                                    className='form-input'
                                    {...register("email", {required: true})} // Guardamos todo el objeto register, pero en email actualizamos
                                />
                                {errors.email && <span>Email required</span>}
                            </div>
                            <button type='submit' className='btn-submit'>Join!</button>
                        </form>
                    ) : (
                        <div className='succes-message'> 
                            <h3>You are now part of the team!</h3> {/*Esta parte solo se muestra si ya eres miembro*/}
                        </div>
                    )}
                </div>
        </section>
    )
}

export default MembershipForm