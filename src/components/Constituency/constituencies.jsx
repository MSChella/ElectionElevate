import React, { useState, useEffect } from 'react';
import { fetchState } from '../../apiServices/stateAPI';
import { fetchConstituency } from '../../apiServices/constituencyAPI';



const Constituency = () => {
    const [selectedState, setSelectedState] = useState('');
    const [constituencies, setConstituencies] = useState([]);
    const [states, setStates] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const stateData = await fetchState();
                console.log('Fetched All States:', stateData);
                setStates(stateData);


                const constituenciesData = await fetchConstituency();
                console.log('Fetched constituencies:', constituenciesData);
                setConstituencies(constituenciesData);


            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleStateChange = (e) => {
        const state = e.target.value;
        setSelectedState(state);
        const filteredConstituencies = constituencies.filter(c => c.state === state);
        setConstituencies(filteredConstituencies);
        // setConstituencies(constituenciesData[state] || []);
    };


    return (
        <div className="constituency-page">
            <h2>Select State</h2>
            <select value={selectedState} onChange={handleStateChange}>
                <option value="">Select a state</option>
                {states.map(state => (
                    <option key={state.id} value={state.name}>{state.name}</option>
                ))}

            </select>

            {selectedState && (
                <div>
                    <h3>Constituencies in {selectedState}</h3>
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
                                    {constituencies.map((constituency, index) => (
                                        <tr key={constituency.id}>
                                            <td>{index + 1}</td>
                                            <td>{constituency.name}</td>
                                            <td>{constituency.reserved}</td>
                                            <td>{constituency.districts}</td>
                                            <td>{constituency.lokSabha}</td>
                                            <td>{constituency.since}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Constituency;

