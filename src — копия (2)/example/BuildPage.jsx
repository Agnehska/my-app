import React from 'react'
import '../App.css'
import {loremIpsum } from 'lorem-ipsum'

function BuildPage(index) {
  return (
    <div className='App'>
        <h1 className="title">{index}</h1>
        <p>Page {index} content {loremIpsum({count: 10})} </p>
    </div>
  )
}

export const PageOne = () => BuildPage(1);
export const PageTwo = () => BuildPage(2);