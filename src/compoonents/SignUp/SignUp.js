import React, { useState } from 'react'
import './SignUp.css';
import { Formik, useFormik } from 'formik';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const SignUp = () => {

    /*   const [IGN, setIGN] = useState("");
      const [userName, setuserName] = useState("");
      const [userPrenom, setuserPrenom] = useState("");
      const [userDate, setuserDate] = useState("");
      const [userEmail, setuserEmail] = useState("");
      const [userPassword, setuserPassword] = useState("");
      const [age, setage] = useState(0);
      const [avatar, setavatar] = useState("")
      
   */
    const [avatar, setavatar] = useState(null)


    const history = useHistory();

    const data = new FormData();



    const formik = useFormik({
        initialValues: {
            IGN: '',
            userName: '',
            userPrenom: '',
            userPassword: '',
            userDate: '',
            userEmail: '',
            age: 0,



        },
        onSubmit: values => {
            data.append('IGN', values.IGN);
            data.append('userName', values.userName);
            data.append('userPrenom', values.userPrenom);
            data.append('userDate', values.userDate);
            data.append('userPassword', values.userPassword)
            data.append('userEmail', values.userEmail);
            data.append('age', values.age)
            data.append('avatar', avatar)
            console.log(avatar)



            axios.post('http://localhost:5000/user/add', data)
                .then((res) => {
                    console.log(res)
                    history.push('/signin')
                })
                .catch((err) => console.log(err))
        },
    });

    


    return (

        < div style={{
            backgroundImage: `url( ${process.env.PUBLIC_URL}/images/thumb-1920-406809.jpg)`,

            backgroundSize: `cover`,
        }
        }>
            <Formik
            >

            </Formik>
            <div className="container">
                <h1 className=" text-center pt-4 text-warning text-stroke" style={{

                }}> Register Now</h1>
                <div style={{
                    backgroundColor: `rgba(0,0,0,0.5)`,
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
                                <label htmlFor="IGN" className="form-label ">IGN</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="IGN"
                                    name="IGN"
                                    onChange={formik.handleChange}
                                    value={formik.values.IGN} />
                            </div>
                            <div className="col-md-12 mb-4"  >
                                <label htmlFor="userName" className="form-label">UserName</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="userName"
                                    name="userName"
                                    onChange={formik.handleChange}
                                    value={formik.values.userName} />
                            </div>
                            <div className="col-md-12 mb-4"  >
                                <label htmlFor="userPrenom" className="form-label">UserPrenom</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="userPrenom"
                                    name="userPrenom"
                                    onChange={formik.handleChange}
                                    value={formik.values.userPrenom}
                                />
                            </div>
                            <div className="col-12 mb-4">
                                <label htmlFor="userPassword" className="form-label">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="userPassword"
                                    name="userPassword"
                                    onChange={formik.handleChange}
                                    value={formik.values.userPassword}
                                />
                            </div>
                            <div className="col-12 mb-4">
                                <label htmlFor="pwdConf" className="form-label">Confirm Password</label>
                                <input type="password" className="form-control" id="pwdConf" />
                            </div>
                            <div className="col-md-12 mb-4">
                                <label htmlFor="userDate" className="form-label">Date</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    id="userDate"
                                    name="userDate"
                                    onChange={formik.handleChange}
                                    value={formik.values.userDate}
                                />
                            </div>

                            <div className="col-md-12 mb-4">
                                <label htmlFor="userEmail" className="form-label">E-mail</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="userEmail"
                                    name="userEmail"
                                    onChange={formik.handleChange}
                                    value={formik.values.userEmail}
                                />
                            </div>
                            <div className="col-md-12 mb-4">
                                <label htmlFor="age" className="form-label">Age</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="age"
                                    name="age"
                                    onChange={formik.handleChange}

                                />
                            </div>
                            <div className="col-md-12 mb-4">
                                <label htmlFor="avatar" className="form-label">Avatar</label>
                                <input
                                    type="file"
                                    className="form-control"
                                    id="avatar"
                                    name="avatar"

                                    onChange={(e) => {
                                        setavatar(e.target.files[0])

                                    }}


                                />
                            </div>

                            <div className="col-12">
                                <button type="submit" className="btn btn-primary">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default SignUp
