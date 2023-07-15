import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { HomePage, CharacterDetailsPage } from '../pages'

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="details/:id" element={<CharacterDetailsPage/>}/>
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </>
  )
}
