import React, { useState, useEffect } from 'react';
import LoaderPage from './LoaderPage';

const DisplayData = ({ validPin, setApiData, apiData }) => {
    const [filterInput, setFilterInput] = useState('');

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch(`https://api.postalpincode.in/pincode/${validPin}`);
                const data = await response.json();
                setApiData(data);

                
            } catch (error) {
                alert('Invalid Pincode!!');
                console.log(error);
            }
        };
            getData();
    
    }, [validPin]);

    // Ensure data is available before rendering
    if (!apiData || apiData.length === 0) {
        return <LoaderPage />;
    }

    const postOffices = apiData[0].PostOffice || [];

    let mapArr= postOffices.filter((item) => item.Name.toLowerCase().includes(filterInput.toLowerCase())) || [];

    console.log(mapArr.length);

    return (
        <div className='w-full p-5'>
            <p className='font-bold text-l'>Pincode: {validPin}</p>
            <p className='text-l mb-4'>
                <span className='font-bold text-l'>Message: </span>{apiData[0].Message}
            </p>

            <div className='p-2 w-full border rounded border-slate-500 bg-white text-black'>
                <i className="fa-solid fa-magnifying-glass mr-2"></i>
                <input
                    type="text"
                    placeholder="Filter"
                    className='bg-white w-10/12 border-none'
                    value={filterInput}
                    onChange={(e) => setFilterInput(e.target.value)}
                />
            </div>
            <div id="container" className='w-full max-h-full overflow-auto flex flex-wrap item-center mt-5 py-5 g-2'>
                {
                    mapArr.length !== 0 ? (
                        mapArr
                            .filter((item) => item.Name.toLowerCase().includes(filterInput.toLowerCase()))
                            .map((item) => (
                                <div className='w-[350px] min-h-[250px] p-2 border rounded border-slate-500 flex flex-col mx-2 my-2' key={item.Name}>
                                    <p className='text-3xl text-center mb-5'>📨</p>
                                    <p className='text-l'><span className='font-bold'>Post Office Name: </span>{item.Name}</p>
                                    <p className='text-l'><span className='font-bold'>Pincode: </span>{item.Pincode}</p>
                                    <p className='text-l'><span className='font-bold'>Branch Type: </span>{item.BranchType}</p>
                                    <p className='text-l'><span className='font-bold'>Delivery Status: </span>{item.DeliveryStatus}</p>
                                    <p className='text-l'><span className='font-bold'>District: </span>{item.District}</p>
                                    <p className='text-l'><span className='font-bold'>Division: </span>{item.Division}</p>
                                    <p className='text-l'><span className='font-bold'>State: </span>{item.State}</p>
                                </div>
                            ))
                    ) : (
                        <>
                        <h1 className='text-3xl font-bold text-red-500 py-auto px-auto w-full mb-5'>
                        ❌Couldn’t 😶‍🌫️find the 📬postal data ➡️that you’re 🧐looking for…🔎</h1>
                        <h2 className='text-4xl font-bold text-center text-yellow-500 py-auto px-auto block'>{ filterInput==='' ? `Try again 🔄️`:""}</h2>
                        </>
                    )
                }
            </div>
        </div>
    );
};

export default DisplayData;
