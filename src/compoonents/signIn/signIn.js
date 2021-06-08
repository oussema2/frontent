import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import { useHistory } from 'react-router'


const SignIn = () => {

    const history = useHistory();
    const formik = useFormik({
        initialValues: {

            userName: '',

            userPassword: '',





        },
        onSubmit: async values => {
            const response = await axios.get(`http://localhost:5000/user/login/${values.userName}&${values.userPassword}`)
            const datauser = await response.data;
            console.log(datauser)
            localStorage.setItem('userData', JSON.stringify(datauser))

            history.push('/')
            window.location.reload(false);







        }
    })


    return (
        <div style={{
            backgroundImage: `url( ${process.env.PUBLIC_URL}/images/unnamed.jpg)`,

            backgroundSize: `cover`,
            height: `1000px`,

            backgroundPosition: `center`,

        }}>
            <h1 className="text-center pt-5 text-warning text-stroke">hello in sign in</h1>
            <div style={{
                backgroundColor: `rgba(0, 0, 0, 0.5)`,
                width: `1000px`,
                margin: `auto`,
                marginTop: `50px`
            }}>
                <div style={{
                    margin: `auto`,
                    color: `#03fcf0`,
                    fontWeight: `bolder`,
                    padding: `70px 70px`
                }}>

                    <form className="row g-3" onSubmit={formik.handleSubmit}>
                        <div className="col-md-12 mb-4">
                            <label htmlFor="userName" className="form-label ">UserName</label>
                            <input
                                type="text"
                                className="form-control mt-4"
                                id="userName"
                                name="userName"
                                onChange={formik.handleChange}
                                value={formik.values.userName} />
                        </div>
                        <div className="col-md-12 mb-4"  >
                            <label htmlFor="userPassword" className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control mt-4"
                                id="userPassword"
                                name="userPassword"
                                onChange={formik.handleChange}
                                value={formik.values.userPassword} />
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary">Register</button>
                        </div>

                    </form>



                </div>
            </div>

        </div>
    )
}

export default SignIn
