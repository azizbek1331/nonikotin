import React from 'react'
import './Publicite.css'
import img5 from '../images/f11.png'
import { GiCigarette } from "react-icons/gi";
import { FaHeadSideCough } from "react-icons/fa6";
import { TbMoodNervous } from "react-icons/tb";
import { MdVolunteerActivism } from "react-icons/md";
import { AiTwotoneSafetyCertificate } from "react-icons/ai";

const Publicite = () => {
    return (
        <div className='reclaim'>
            <div className="reclaim-begin">
                <img className='reclaim-img' src={img5} alt="" />
            </div>
            <div className="reclaim-descr">
                <h1>Nonikotin</h1>
                <div className="descr-into">
                    <div className="into-smoke">
                        <GiCigarette className='publicite-label' />
                        <p>Kashandalik bilan bog`liq psixologik muammolarni yengishda yordam beradi.</p>
                    </div>
                    <div className="into-cough">
                        <FaHeadSideCough className='publicite-label' />
                        <p>Quruq yo`tal,tomoq og`rig`i hissiga qarshi qarshi kurashadi.</p>
                    </div>
                    <div className="into-smoke">
                        <TbMoodNervous className='publicite-label' />
                        <p>Depressiv holatlarni me`yorlashtiradi.</p>
                    </div>
                    <div className="into-smoke">
                        <MdVolunteerActivism className='publicite-label' />
                        <p>Astma kabi nafas olish kasalliklarining alomatlarini yengillashtiradi.</p>
                    </div>
                    <div className="into-smoke">
                        <AiTwotoneSafetyCertificate className='publicite-label' />
                        <p>O`ziga qaram qilib qo`ymaydi.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Publicite