/**
 * Created by zll on 2018/3/29.
 */
import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'

import Counter from './components/Counter'

import counter from './reducer'

const store= createStore(counter)




const renderEle = () =>render(<Counter
        value = {store.getState()}
        onIncrement = { ()=> store.dispatch({ type : 'INCREMENT'})}
        onDecrement = { ()=> store.dispatch({ type : 'DECREMENT'})}
/>,document.getElementById('root'))

renderEle()
store.subscribe(renderEle)