import React from 'react'
import Skeleton from '@mui/material/Skeleton';
import './Loading.css'

export default function Loading() {
    return (
        <div className='skelton' >
            <div> <Skeleton variant="rectangular" width={250} height={170} />
                <Skeleton width="90%" />
                <Skeleton width="70%" />
                <Skeleton width="20%" />

            </div>
            <div>  <Skeleton variant="rectangular" width={250} height={170} />
                <Skeleton width="90%" />
                <Skeleton width="70%" />
                <Skeleton width="20%" />
            </div>
            <div> <Skeleton variant="rectangular" width={250} height={170} />
                <Skeleton width="90%" />
                <Skeleton width="70%" />
                <Skeleton width="20%" />
            </div>
            <div>  <Skeleton variant="rectangular" width={250} height={170} />
                <Skeleton width="90%" />
                <Skeleton width="70%" />
                <Skeleton width="20%" />
            </div>
            <div>  <Skeleton variant="rectangular" width={250} height={170} />
                <Skeleton width="90%" />
                <Skeleton width="70%" />
                <Skeleton width="20%" />
            </div>
        </div>
    )
}
