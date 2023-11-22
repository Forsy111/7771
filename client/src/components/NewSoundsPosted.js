import React, { useState, useEffect } from 'react'
import axios from 'axios'
import 'bulma'
// import hashtagfy from 'hashtagfy2'
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
// import SubCategories from '../data/SubCategories.js'
import NavBar from './Navbar.js'
import Sound from './Sound.js'
import styles from '../styles/NewSoundsPosted.module.scss'
import { baseUrl } from '../config.js'
import Footer from './Footer.js'



function SoundCreate() {

  const navigate = useNavigate()


  const [soundDisplay, updateSoundDisplay] = useState([])
  const { singleUserId } = useParams()
  const [button, updateButton] = useState(false)

  async function fetchSound() {
    try {
      const { data } = await axios.get(`${baseUrl}/oneUser/${singleUserId}`)
      // reversing the data so that the newest posts will appear first
      updateSoundDisplay(data.reverse())
    } catch (err) {
    }
  }


  useEffect(() => {
    fetchSound()
  }, [])

  return <>
    <NavBar />
    <main className={styles.mainSection}>
      <div className={styles.grid}>

        <article className={styles.article}>
          <button
            className={styles.uploadButton}
            onClick={() => navigate("/all-sounds/new-sounds/upload")}>
            Создать песню
          </button>
        </article>
        <div className={styles.grid}>
          <Sound />
        </div>
      </div>
      <Footer />
    </main>
  </>
}


export default SoundCreate