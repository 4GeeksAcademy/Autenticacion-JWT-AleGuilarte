import { useState } from "react"

export const Registro = () => {

    const [name, setName] = useState ("")
    const [email, setEmail] = useState ("")
    const [pass, setPass] = useState ("")

    const handelSubmit = async (e)=> {
        e.preventDefault()

        let newUser ={
            "username": name,
            "email": email,
            "password": pass
        }

        try {
        await fetch("https://turbo-space-disco-rj45qxvpx9g35qv4-3001.app.github.dev/api/registro", {
            method: "POST",
            body: JSON.stringify(newUser),
            headers: {"content-type": "application/json"}
        })
        alert("Usuario registrado")
        } catch (error) {
        alert("ERROR Usuario ya registrado")
        }



    }


    return (
        <div className="container">
            <div className="row justify-content-center  mt-4">
                <div className="col-md-6 col-lg-8">
                    <div className="card shadow-lg p-4">
                        <h4 className="mb-4">Registro</h4>
                        <form onSubmit={handelSubmit}>
                            <div className="mb-3">
                                <label htmlFor="username" className="form.label">Usuario</label>
                                <input value={name} onChange={(e)=> setName(e.target.value)} type="username" className="form-control" id="username" placeholder="Nombre de Usuario" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form.label">Correo Electronico</label>
                                <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" className="form-control" id="email" placeholder="Ejemplo@gmail.com" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Contraseña</label>
                                <input value={pass} onChange={(e)=> setPass(e.target.value)} type="password" className="form-control" id="password" placeholder="***************" required />
                            </div>
                            <button type="submit" className="btn btn-primary w-100">Registrarse</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}