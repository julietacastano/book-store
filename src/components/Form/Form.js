const Form = ({onChange, purchase}) =>{
    
    return(
        <div className="container-fluid">
            <p>Please complete the following information</p>
            <form className="form row justify-content-center" onSubmit={purchase}>
                <div className="formItem col-lg-5">
                    <input className="form-control" name="firstName" placeholder="First name" type="text" required
                    onChange={onChange}></input>
                </div>
                <div className="formItem col-lg-5">
                    <input className="form-control" name="lastName" placeholder="Last name" type="text" 
                    required onChange={onChange}></input>
                </div>
                <div className="formItem col-lg-6">
                    <input className="form-control" name="email" placeholder="Email" type="email" 
                    required onChange={onChange}></input>
                </div>
                <div className="formItem col-lg-4">
                    <input className="form-control" name="phone" placeholder="Phone" type="number"
                    onChange={onChange}></input>
                </div>
                <div  className="formItem col-lg-4">
                    <button className="btn btn-outline-success" type="submit">Finish Purchase</button>
                </div>
            </form>
            
        </div>
    )
}

export default Form;