import React , { useEffect } from 'react'
import API from '../../api'
import './Currency.css'
import { useDispatch, useSelector } from 'react-redux'

const Currency = () => {
  
  const dispatch = useDispatch()
  const arr = useSelector(state => state.currency.arr)
  const baseCurrency = useSelector(state => state.currency.base)
  const option = useSelector(state => state.currency.arr)

  const getCurrencies = async (base) => {
    try {
    const data = await API.get(base)
    return data.data.conversion_rates
    } catch(e) {console.log(e)}
  }
  useEffect( async () => {
      const arr = await getCurrencies("USD")
      dispatch({type:"ADD_BASE", payload: "USD"})
      const [Base, ...arrCyrrencies] = Object.entries(arr)
      const obj1 = await arrCyrrencies.map((index) => {
        return {...index}
       })
      //  console.log(obj1)
      dispatch({type:"ADD_ARR", payload: obj1})
      dispatch({type:"ADD_OPTIONS", payload: obj1})
  },[])

  const onChange = async (e) => {
    try {
      const arr = await getCurrencies(e.target.value)
      const [base, ...arrCyrrencies] = Object.entries(arr)
      dispatch({type:"ADD_BASE", payload: e.target.value})
      const obj1 = await arrCyrrencies.map((index) => {
        return {...index}
       })
      dispatch({type:"ADD_ARR", payload: obj1})
    } catch(e) {console.log(e)}
  }

  const valute = (
    arr ?
      arr.map((item) => {
        return (
          <li key={item[0]} className="currency-item">{'1 '+ baseCurrency + ' = ' + item[1] + ' ' + item[0] }</li>
        )
      })
     :  <span>Loading...</span>
    )  
      const options = (
        option ?
          option.map((item) => {
            return (
              <option key={item[0]} value={item[0]}>{ item[0] }</option>
            )
          })
         :  null
        )  
  
  return (
    <div className="currency">
    <select name="currency" onChange={onChange}>
      <option style={{display: "none"}} value="USD">USD</option>
      { options }
    </select>
      <ul className="currency-group">
        { valute } 
      </ul>
    </div>
  )
}
export default Currency