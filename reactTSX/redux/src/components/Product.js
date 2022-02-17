import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'


const Product = props =>{
  console.log(props.bookList)
  return(
    <div>
      <h2> Book List </h2>
      <Link to="/cart">Box</Link>
    </div>
  )
}


const mapStateToProps = state => {
  return {
    bookList: state.bookList

  }
}
export default connect(mapStateToProps)(Product)