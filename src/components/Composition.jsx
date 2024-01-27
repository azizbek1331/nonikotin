import React from 'react'
import img1 from '../images/f8.png'
import img2 from '../images/f9.png'
import img3 from '../images/f10.png'
import './Composition.css'

const Composition = () => {
    return (
        <div className='card-main'>
            <div className="card">
                <img src={img1} className="card-img" alt="" />
                <div className="card-body">
                    <h1 className="card-sub-title">UDI hindi o`ti</h1>
                    <p className="card-info">Allergik astma,rinit kabinafas olish kasalliklarining alomatlarini yengillashtirad.Tomoq og`rig`i va yo`talni kamaytiradi.Immunitetni oshirish orqali kasalliklardan himoya qiladi.UDI kurka o`simligining kukuni asal,zanjabil qora qalampir va zerdechal bilan aralashtirib iste`mol qilish mumkin.Burun bo`shlig`ida muammosi borlar uchun samarali.Tonzilit va umumiy yallig`lanish haqida gap ketganda,UDI kurka o`ti samarali bo`ladi.</p>
                </div>
            </div>

            <div className="card">
                <img src={img2} className="card-photo" alt="" />
                <div className="card-body">
                    <p className="card-sub-title">Qorabosh o`ti</p>
                    <p className="card-info">Bu nafas olish kasaliklari va balg`am chiqarish belgilarini kamaytirishga yordam beradi.Tinchlantiruvchi va bo`shashtiruvchi ta`siri tufayli qulay uyqu uchun afzalliklari bor.Tarkibidagi vitaminlar,minerallar va antikosidant moddalar immunitet tizimini qo`llab-quvvatlaydi.</p>
                </div>
            </div>

            <div className="card">
                <img src={img3} className="card-peinture" alt="" />
                <div className="card-body">
                    <p className="card-sub-title">Qora qalampir o`ti</p>
                    <p className="card-info">Ushbu o`simlik tufayli chekish istagi kundan-kunga kamayadi va tugaydi.Odatda u ko`pchilik miya kasalliklarini davolashda qo`llaniladi.Sinusit yo`tal,surunkali sovuq va isitmani davolashda qo`llaniladi.Bu depressiya va tashvish belgilarining oldini oladi va yengillashtiradi.Bosh og`rig`i va migrenni davolash uchun boshqa o`tlar bilan bitgalikda qo`llaniladi.</p>
                </div>
            </div>
        </div>
    )
}

export default Composition
