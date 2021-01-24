import React, { useState } from 'react'
// import './Filter.scss'
import loupe from '../../images/loupe.png'
import { Styles } from './StyledFilter'

const Filter = ({setFilter}) => {
  const [input, setInput] = useState('')
  return (
    <Styles>
      <div className={'filter__input'}>
        <img src={loupe} alt=""/>
        <input placeholder={'Поиск'} value={input || ''}
        onChange={e=>setInput(e.target.value)}
        />
        <button onClick={()=>setFilter(input)}>Search</button>
      </div>

    </Styles>
  )
}

export default Filter
