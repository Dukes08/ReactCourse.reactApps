import { useState } from 'react'
import {products} from './mocks/products.json'
import {Products} from './components/Products'
import './App.css'

function App() {
  

  return (
    <>
    <Products products={products}/>
    </>
  )
}

export default App
