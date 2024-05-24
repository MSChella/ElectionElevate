import React from 'react'
import Constituency from '../../components/Constituency/constituencies'
import '../ElectoralInformation/style.css';

const ElectoralInformation = () => {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <Constituency />
                </div>
            </div>
        </div>
    )
}

export default ElectoralInformation
