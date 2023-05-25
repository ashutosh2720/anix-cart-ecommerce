import React from 'react'
import './Profile.css'
import { users } from '../../backend/db/users'

function Profile() {
    return (
        <div className='profile'>
            <div className='user'>
                {users.map((user) =>
                    <div>
                        <p>Name : {user.firstName} {user.lastName}</p>
                        <p>Email : {user.email}</p>
                        <p>address : {user.address}</p>
                        <p>pincode : {user.pincode}</p>
                        <p>contact Number : {user.contactNumber}</p>

                    </div>)}
            </div>
        </div>
    )
}

export default Profile
