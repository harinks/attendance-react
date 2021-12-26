import React from 'react'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function Attandance() {
    let params = useParams()
    const [attandance, setAttandance] = useState([])
    useEffect(async () => {
        try {
            let attendanceList = await fetch(`http://localhost:3001/attendance?studentId=${params.id}`)
            let attandanceData = await attendanceList.json()
            setAttandance(attandanceData)
        } catch (error) {
            console.log(error)
        }
    }, [])


    return (
        <>
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Attandance</h1>
                <Link to={`/add-attendance/${params.id}`} class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    class="fas fa-download fa-sm text-white-50"></i> Add Attandance</Link>
            </div>
            <div class="card shadow mb-4">
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>Status</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    attandance.map((attandance) => {
                                        return <tr>
                                            <td>{attandance.attandance}</td>
                                            <td>{attandance.date}</td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Attandance