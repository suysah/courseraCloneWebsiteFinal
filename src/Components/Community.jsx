import React from 'react'

const Community = (props) => {
  return (
    <div >
      <img src={props.img} className='' style={{borderRadius: '100%'}}/>
      <h4 className='text-primary'> {props.name} </h4>
      <hr />
      <h5> {props.country} </h5>
      <p> {props.quote} </p>
    </div>
  )
}

export default Community
