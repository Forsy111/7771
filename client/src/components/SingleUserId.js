import React, { useState, useEffect, Profiler } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import styles from '../styles/SingleUserId.module.scss'
import { baseUrl } from '../config'
import SearchBar from './searchBar.js'
import NavBar from './Navbar.js'
import Sound from './Sound.js'
import Footer from './Footer.js'

const SingleUserId = (props) => {
  const [singleProfileData, updateSingleProfileData] = useState([])
  const { singleUserId } = useParams()
  const [filterValue, setFilterValue] = useState('')
  const [activeClass, setactiveClass] = useState('')
  const categories = ["nature", "human", "machines", "animals", "materials", "ambience", "electric", "weather"]
  const location = useLocation();
  const state = location.state;
  const by = 'by'.toLowerCase()

  // const { stateparams } = useLocation()

  useEffect(() => {
    axios.get(`${baseUrl}/oneUser/${singleUserId}`)
      .then(axiosResp => {
        updateSingleProfileData(axiosResp.data)
      })
  }, [singleUserId])


  function handleClick(event) {
    if ((event.target.innerHTML).includes('All')) {
      setFilterValue('')
      setactiveClass(event.target.innerHTML)
    } else {
      setFilterValue(event.target.innerHTML)
      setactiveClass(event.target.innerHTML)
    }
  }

  return <>

    <NavBar />

    <section className={styles.section}>
      <div className={styles.main}>

        <div className={styles.gridContainer}>

          <SearchBar />

          <Sound />
        </div>
      </div>
    </section>
    <Footer />
  </>
}

export default SingleUserId