import React from 'react'
import API from '../../api'
import './Converter.css'
import { useDispatch, useSelector } from 'react-redux'

const Converter = () => {

  let from = useSelector(state => state.converter.from)
  let result = useSelector(state => state.converter.result)
  const dispatch = useDispatch()
  const onConvert = (event) => {
    const value = event.target.value.toUpperCase().split(' ')
    dispatch({type:"ADD_FROM", payload: value})
    // console.log(from);
  }
  const onClick = async () => {
    try {
      const value = from[1]
      const data = await API.get(value)
      const toCurrency = data.data.conversion_rates
      const val = onState(toCurrency)
      dispatch({type:"ADD_RESULT", payload: val})
    } catch(e) {
      result = null
      dispatch({type:"ADD_RESULT", payload: result})
      console.log(e)
    }
  } 
  const onState = (currency) => {
    const to =(currency[from[3]] * from[0]).toFixed(2)
    if (to === 'NaN' || from[2] !== 'IN'){
      return null
    } else {
      const value = from[0] + " " + from[1] + " = " + to + " " + from[3]
      return value
    }
  }
  const isError = <span style={{color: "red", height: '25px'}}>Проверьте корректность введенных данных</span>
  const isOk = <span style={{height: '25px'}}></span>
  
  return (
    <div className='converter'>
      <div className='logo'></div>
      <input className="input-value" type="text" placeholder="10 usd in rub" maxLength="25" onChange={onConvert}/>
      { result === null  ? isError : isOk }
      <button onClick={onClick}>Конвертировать</button>
      <div className="result"><span>{ result }</span></div>
    </div>
  )
}

export default Converter