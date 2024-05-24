import React from 'react';

const ConstituencyTable = ({ data }) => {
    return (
        <div className="card">
            <div className="card-body">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Constituency</th>
                            <th>Reserved</th>
                            <th>District</th>
                            <th>Lok Sabha Constituency</th>
                            <th>Since</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((constituency, index) => (
                            <tr key={constituency.id}>
                                <td>{index + 1}</td>
                                <td>{constituency.constituency}</td>
                                <td>{constituency.reserved}</td>
                                <td>{constituency.district}</td>
                                <td>{constituency.lokSabha}</td>
                                <td>{constituency.since}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ConstituencyTable;