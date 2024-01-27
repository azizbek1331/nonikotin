import React from 'react'
import { FaChalkboardTeacher } from "react-icons/fa";
import { MdHeadphones } from "react-icons/md";
import { MdOutlineDeliveryDining } from "react-icons/md";
import './Edge.css'

const Edge = () => {
    return (
        <div className='advantage'>
            <h1>Bizning afzalliklar</h1>
            <strong>Mahsulot harid qilish sizga nima beradi?</strong>
            <div className='edge-head'>
                <div className="edge-group">
                    <div className='edge-begin'>
                        <div className="begin-into">
                            <MdHeadphones className='begin-teloch' />
                            <h2>Shaxsiy mutaxassisga ega <br /> bo'lasiz!</h2>
                            <p>Mutaxassislarimiz ijobiy natija olganingizga <br /> qadar siz bilan aloqada bo‘lishadi!</p>
                        </div>
                    </div>
                    <div className='edge-second'>
                        <div className='second-into'>
                            <FaChalkboardTeacher className='begin-ios' />
                            <h2>Biz mijozlarimizni yaxshi ko`ramiz!</h2>
                            <p>Natija va rozichilik bizning oliy maqsadimiz!</p>
                        </div>
                    </div>
                </div>
                <div className="edge-suit">
                    <div className="edge-last">
                        <div className="last-into">
                            <MdOutlineDeliveryDining className='begin-phone' />
                            <h2>Bepul yetkazib berish xizmati!</h2>
                            <p>Buyurtmadan so`ng mahsulot qisqa vaqt ichida qo`lingizga yetkaziladi</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Edge
