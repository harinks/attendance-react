import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function StudentList() {
    const [students, setStudents] = useState([])
    useEffect(async () => {
        try {
            let studentData = await fetch(`https://61c336039cfb8f0017a3ea28.mockapi.io/students`)
            let studentList = await studentData.json()
            setStudents(studentList)
        } catch (error) {
            console.log(error)
        }
    }, [])

    return (
        <>
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Student List</h1>
            </div>
            <div class="card shadow mb-4">
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Avatar</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    students.map((student) => {
                                        return <tr>
                                            <td>{student.id}</td>
                                            <td>{student.name}</td>
                                            <td><img src={student.avatar}></img></td>
                                            <td>
                                            <Link to={`/student/${student.id}`}><button className='btn btn-primary btn-sm mt-2 mr-2'>View</button></Link>
                                            </td>
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

export default StudentList
