import React from 'react'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
  import { useSelector } from 'react-redux';
import TopBar from './TopBar'
import { Link } from 'react-router-dom'
import { getCartTotal } from '../redux/CartSlice'

function Header() {
  const dispatch = useDispatch();
  const {totalItems} = useSelector(state=>state.cart)
  console.log(totalItems)
  useEffect(() => {
      dispatch(getCartTotal());
  }, [])

  return (
    <div className='cantainer-fluid fixed-top'>
<TopBar/>
    <div className='cantainer px-0'>
    <nav className='navbar navbar-light bg-white navbar-expand-xl'>
    <Link to='/' className='navbar-brand'>
    <h1 className='text-primary disblay-6'>Fruitsables</h1>
    </Link>
    <button type='btn' className='navbar-toggler py-2 px-3'>
    <span className='fa fa-bars text-primary'></span>
    </button>
    <div className='collapse navbar-collapse bg-white'>
    <div className='navbar-nav mx-auto'>
    <Link to='/' className='nav-item nav-link active'>Home</Link>
    <Link to='/shop' className='nav-item nav-link '>Shop </Link>
    <Link to='/shop-detail' className='nav-item nav-link '>Shop Detail</Link>
    <div className='nav-item dropdown'>
    <Link to='' className='nav-link dropdown-toggle' data-bs-toggle='dropdown'>Category</Link>
    <div className='dropdown-menu m-0 bg-secondary rouded-0'>
    <Link className='dropdown-item '>Vegetables</Link>
    <Link  className='dropdown-item '>Fruits</Link>
    <Link  className='dropdown-item'>Bread</Link>
    <Link  className='dropdown-item'>Meat</Link>
    </div>
    </div>
    <Link to='/contact' className='nav-item nav-link active'>Contact</Link>
    </div>
    <div className="d-flex m-3 me-0">
    <button className="btn-search btn border border-secondary btn-md-square rounded-circle bg-white me-4" data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fas fa-search text-primary"></i></button>
    <Link to="/cart" className="position-relative me-4 my-auto">
        <i className="fa fa-shopping-bag fa-2x"></i>
        <span className="position-absolute bg-secondary rounded-circle d-flex align-items-center justify-content-center text-dark px-1" style={{top: '-5px', left: '15px', height: '20px', minWidth: '20px' }}>{totalItems}</span>
    </Link>
    <Link className="my-auto">
        <i className="fas fa-user fa-2x"></i>
    </Link>
</div>
    </div>
    </nav>
    </div>
    </div>
  )
}

export default Header