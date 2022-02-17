
import Product from './components/Product'
import Cart from './components/Cart'
import {Route} from "react-router-dom"



import {data} from './data'

const App = ()=> {

  return (
    <div className="App">
      <h1>Shopping box</h1>
      <Route exact  path='/' compononet={Product} />
      <Route  path='/cart' component={Cart} />
    </div>
  );
}

// const mapStateToProps = state => {
//   return {
//     bookList: state.bookList

//   }
// }

export default App