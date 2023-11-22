import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
// import SearchBar from './searchBar'
import styles from '../styles/SoundList.module.scss'
// import Navbar from './Navbar.js'
import { baseUrl } from '../config'
// import Footer from './Footer.js'


const Sound = () => {
    const [soundData, updateSoundData] = useState([]) // issue with true non boolean 
    const [filterValue, setFilterValue] = useState('')
    const [sound, setSound] = React.useState(undefined)
    const { soundId } = useParams()

    // const [activeClass, setactiveClass] = useState('')
    // const categories = ["nature", "human", "machines", "animals", "materials", "ambience", "electric", "weather"]

    React.useEffect(() => {
        fetch(`${baseUrl}/all-sounds/${soundId}`)
            .then(resp => resp.json())
            .then(data => setSound(data))
    }, [soundId])

    useEffect(() => {
        axios.get(`${baseUrl}/all-sounds`)
            .then(axiosResp => {
                updateSoundData(axiosResp.data)
            })
    }, [])

    //   function handleClick(event) {
    //     if (event.target.innerHTML === 'All Sounds') {
    //       setFilterValue('')
    //       setactiveClass(event.target.innerHTML)
    //     } else {
    //       setFilterValue(event.target.innerHTML)
    //       setactiveClass(event.target.innerHTML)
    //   }
    // }

    function categoryFilter() {
        return soundData.filter((sound) => {
            return (sound.category === filterValue || filterValue === '')
        })
    }

    return <>
        {/* M A I N  */}
        {/* <div className={styles.grid}> */}
        {soundData === true ? null : categoryFilter().map((sound, index) => {
            return (
                <div key={index} className={styles.soundPreviewContainer} >
                    <div className={styles.wholeCard}>
                        <div className={styles.innerCard}>

                            {/* A U D I O  C O N T R O L S  &  W A V  I M A G E */}
                            <Link to={`/all-sounds/${sound._id}`}>
                                <div className={styles.ClickToShowDetails}>
                                    <h5 className={styles.h5SoundList}>{sound.fileName}</h5>
                                    <h5>{sound.ganre}</h5>
                                    <div>
                                        {/* <img className={styles.wavimg} src={sound.image} alt="wavfile"></img>     */}
                                        <audio src={sound.url} controls controlsList="nodownload" className={styles.audiofile}></audio>
                                    </div>
                                </div>
                            </Link>

                            {/*  U S E R  C A R D  H E A D E R */}
                            <div className={styles.userdate}>
                                <Link to={`/oneUser/${sound.user._id}`} state={sound.user.username}>
                                    <div className={styles.userinfo} key={sound.user.image}>
                                        <img className={styles.userAvatar} src={sound.user.image} alt={sound.user.username} />
                                        <h5>{sound.user.username}</h5>
                                    </div>
                                </Link>

                                {/* D A T E  A N D  T I M E  I N F O */}
                                <div className={styles.date}>
                                    <p>{sound.createdAt.split("T")[0].split("-").slice(0).reverse().join(" ")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })}
        {/* </div> */}
    </>
}

export default Sound









