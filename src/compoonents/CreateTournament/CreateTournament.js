import axios from 'axios';
import { Formik, useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';


const CreateTournament = () => {
    const data = new FormData();
    const history = useHistory();
    const [tournamentPic, settournamentPic] = useState(null)
    const [games, setgames] = useState([])
    const userData = JSON.parse(localStorage.getItem('userData'))

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('http://localhost:5000/game')
            const data = await response.data
            setgames(data)
            console.log(games)
        }

        fetchData();


    }, [])




    const formik = useFormik({
        initialValues: {
            nameTournament: '',
            dateByDate: '',
            gameOfTournament: '',
            numberOfPlayers: '',
            dateByTime: '',
            price: ''



        },
        onSubmit: values => {
            data.append('nameTournament', values.nameTournament);
            data.append('dateByDate', values.dateByDate);
            data.append('dateByTime', values.dateByTime);

            data.append('gameOfTournament', values.gameOfTournament);
            data.append('numberOfPlayers', values.numberOfPlayers);
            data.append('price', values.price)
            data.append('idCreator', userData._id)

            data.append('tournamentPic', tournamentPic)

            console.log(values)

            for (var pair of data.entries()) {
                console.log(pair[0] + ', ' + pair[1]);
            }
            axios.post('http://localhost:5000/tournament/add', data)
                .then((res) => {
                    console.log(res)
                    history.push('./')

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
                                <label htmlFor="nameTournament" className="form-label ">Name Tournament</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="nameTournament"
                                    name="nameTournament"
                                    onChange={formik.handleChange}
                                    value={formik.values.nameTournament} />
                            </div>
                            <div className="col-md-12 mb-4 row"  >
                                <div className="col-md-6">
                                    <label htmlFor="dateByDate" className="form-label">Date Tournament</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        id="dateByDate"
                                        name="dateByDate"
                                        onChange={formik.handleChange}
                                        value={formik.values.dateByDate} />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="dateByTime" className="form-label">Time Tournament</label>


                                    <input
                                        type="time"
                                        id="dateByTime"
                                        class="form-control"
                                        onChange={formik.handleChange}
                                        value={formik.values.dateByTime}
                                    />
                                    <label for="inputMDEx1">Choose your time</label>

                                </div>
                            </div>
                            <div className="col-md-12 mb-4"  >
                                <label htmlFor="gameOfTournament" className="form-label">Game Of Tournament</label>

                                <select
                                    class="form-select"
                                    id="gameOfTournament"
                                    onChange={formik.handleChange}
                                    value={formik.values.gameOfTournament} >
                                    <option selected>...</option>
                                    {games.length > 0 ? games.map(game => <option >{game.gameName}</option>) : null
                                    }
                                </select>



                            </div>
                            <div className="col-12 mb-4">
                                <label htmlFor="numberOfPlayers" className="form-label">Number Of Players</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="numberOfPlayers"
                                    name="numberOfPlayers"
                                    onChange={formik.handleChange}
                                    value={formik.values.numberOfPlayers}
                                />
                            </div>
                            <div className="col-12 mb-4">
                                <label htmlFor="price" className="form-label">Price</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="price"
                                    onChange={formik.handleChange}
                                    value={formik.values.price}
                                />
                            </div>




                            <div className="col-md-12 mb-4">
                                <label htmlFor="avatar" className="form-label">Tournament Picture</label>
                                <input
                                    type="file"
                                    className="form-control"
                                    id="avatar"
                                    name="avatar"

                                    onChange={(e) => {
                                        settournamentPic(e.target.files[0])

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

export default CreateTournament
