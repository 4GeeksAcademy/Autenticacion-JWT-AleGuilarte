export const Login  =()=>{



    return(
        <div className="container">
            <div className="row justify-content-center  mt-4">
                <div className="col-md-6 col-lg-8">
                    <div className="card shadow-lg p-4">
                        <h4 className="mb-4">Registro</h4>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="email" className="form.label">Correo Electronico</label>
                                <input type="email" className="form-control" id="email" placeholder="Ejemplo@gmail.com" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Contraseña</label>
                                <input type="password" className="form-control" id="password" placeholder="***************" required />
                            </div>
                            <button type="submit" className="btn btn-primary w-100">Registrarse</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )

}