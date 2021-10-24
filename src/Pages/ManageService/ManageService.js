import React, { useEffect, useState } from 'react';

const ManageService = () => {

    const [myservices, setMyservices] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/services`)
            .then(res => res.json())
            .then(data => setMyservices(data));
    }, [])


    const handleDelete = id => {
        const url = `http://localhost:5000/services/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('deleted successfully');
                    const remaining = myservices.filter(service => service._id !== id);
                    setMyservices(remaining);
                }
            });
    }


    return (
        <div>
            <h3>Manage Services</h3>

            {
                myservices.map(service => <div key={service._id}>
                    <h5>{service.name}</h5>
                    <button onClick={() => handleDelete(service._id)}>delete</button>
                </div>)
            }

        </div>
    );
};

export default ManageService;