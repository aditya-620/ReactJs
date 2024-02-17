import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'


//as we know in app.jsx there is app method, so we created our on
function MyApp(){
    return (
        <div>
            <h1>Custom App | chai</h1>
        </div>
    )
}


//at the end the react also make the method to tree like structure
//so, we also created our own object, but it didn't work
// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }


const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit google</a>
)


const anotherUser = "chai aur react"


//this uses babble(transcripter), and automatically injects, and follows same sets of way to write
const reactElement = React.createElement(
    'a',
    {href: 'https://google.com',target: '_blank' },
    'click me to visit google',
    anotherElement
)

ReactDOM.createRoot(document.getElementById('root')).render(
//  MyApp
    reactElement
  
)