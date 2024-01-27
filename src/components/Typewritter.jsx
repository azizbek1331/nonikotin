import React from 'react';
import './Typewritter.css';
import { TypeAnimation } from 'react-type-animation';

function Typewritter() {

    return (
        <div className='head-type'>
            <TypeAnimation sequence={['Chekish umr zavoli ekanligi haqida ko`p eshitganmiz,lekin nima uchun undan voz kecha olmaymiz?Chunki inson miyasi dastlab qiziqishga chakib ko`rgan tamaki mahsulotiga bora-bora qaram bo`lib boradi.Natijada undan qutula olmaydi.Xo`sh,bunday vaziyatda nima qilish kerak?Biz sizga eng yaxshi dori vositasi bo`lgan Noniktin mahsulotini tavsiya qilamiz.O`zingiz va oilangizni asrashingizga ishonamiz.', 4000, () => console.log("done")]}
               wrapper="span"
                speed={[5]}
                deletionSpeed={[30]}
                preRenderFirstString={false}
                style={{ fontSize: '28px', display: 'inline-block' }}
                repeat={[Infinity]}
            />
        </div>
    )
}

export default Typewritter