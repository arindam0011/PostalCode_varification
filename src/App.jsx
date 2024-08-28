import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
const LocationInput = lazy(() => import('./Componants/LocationInput'))
const DisplayData = lazy(() => import('./Componants/DisplayData'))
import LoaderPage from './Componants/LoaderPage'
const App = () => {


  const [pincode, setPincode] = useState('');
  const [validPin, setValidPin] = useState('');
  const [apiData, setApiData] = useState();


  return (
    <div className='App w-full bg-slate-50 h-screen '>

      <Suspense fallback={<LoaderPage />}>
        <Routes>
          <Route path='/PostalCode_varification' element={
            <LocationInput
              pincode={pincode}
              setPincode={setPincode}
              validPin={validPin}
              setValidPin={setValidPin}
              apiData={apiData}
              setApiData={setApiData}
            />} />
          <Route path='/PostalCode_varification/Details' element={
            validPin ? (<DisplayData
              pincode={pincode}
              validPin={validPin}
              apiData={apiData}
              setApiData={setApiData}
              setPincode={setPincode}
              setValidPin={setValidPin}
            />) :
              (<LocationInput
                pincode={pincode}
                setPincode={setPincode}
                validPin={validPin}
                setValidPin={setValidPin}
                apiData={apiData}
                setApiData={setApiData}
              />)} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
