import React from 'react'
import { Formik, useFormik } from 'formik'
import { useNavigate, useParams } from 'react-router-dom';
function AddAttandance() {
    let params = useParams()
    let navigate = useNavigate()
    const formik = useFormik({
        initialValues : {
            attandance : 'present',
            date : '',
            studentId : parseInt(params.id)
        },
        onSubmit : async (values) => {
            console.log(values)
              await fetch(`http://localhost:3001/attendance`,{
                  method : 'POST',
                  body : JSON.stringify(values),
                  headers : {
                      'Content-type' : 'application/json'
                  }
              })
              navigate(`/student/${params.id}`)
        }
    })
    return (
        <>
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Add Attandance</h1>
            </div>
            <form onSubmit={formik.handleSubmit}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6'>
                             <select name="attandance" className='form-control' 
                                onChange={formik.handleChange} value={formik.values.attandance}>
                                <option value="present">Present</option>
                                <option value="absent">Absent</option>
                            </select>
                        </div>
                        <div className='col-lg-6'>
                            <input name="date" type="date" className='form-control'
                             onChange={formik.handleChange} value = {formik.values.date}>
                             </input>
                        </div>
                        <div className='col-lg-6 mt-3'>
                            <input type="submit" className='btn btn-primary'>
                              </input>
                        </div>
                    </div>
                </div>
            </form>



        </>
    )
}

export default AddAttandance