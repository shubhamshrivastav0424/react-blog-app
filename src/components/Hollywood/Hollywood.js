import React from 'react'
import Latest from '../Home/Single Components/Latest.js'
import { hollywood, holly, holly_right } from '../Home/Api.js'
import Waves from '../Home/Waves/Waves.js'
import Bollywoodrightimgdiv from '../Bollywood/Bollywoodrightimgdiv.js'
import "../Home/styles/hollywood.css"
import Bollywoodrightdiv from "../Bollywood/Bollywoodrightdiv.js"
import Advertisment from '../Home/Waves/Advertisment.js'


const Hollywood = () => {
    return (
        <>
            <div className='Hollywood' >
                <div className='hollywood_1'>
                    <Latest heading="Hollywood" />
                    {
                        hollywood.map(hollywood => {
                            return (
                                <Waves key={hollywood.id} title={hollywood.title} imgurl={hollywood.imgurl} content={hollywood.content} fontsize="18" marginTop='12' category="Hollywood_Blog / Click to Read More" id={hollywood.id} cat={hollywood.cat} />
                            )
                        })
                    }
                </div>
                <div className='hollywood_2'>

                    <Latest heading="Top Posts" />
                    <Bollywoodrightimgdiv title={holly[0].title} imgurl={holly[0].imgurl} category="Hollywood_Blogger" date="DEC 19, 2021" />
                    {
                        holly_right.map(holly_right => {
                            return (
                                <Bollywoodrightdiv key={holly_right.id} title={holly_right.title} imgurl={holly_right.imgurl} category="Hollywood_Blogger" date="FEB 19, 2022" />
                            )
                        })
                    }
                    <Advertisment />

                </div>
            </div>
        </>
    )
}

export default Hollywood