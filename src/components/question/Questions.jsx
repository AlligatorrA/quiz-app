import React, { useState, useEffect } from 'react'
import './question.css'
import QBank from './QBank'
const Questions = () => {
    const [curQuestion, setCurrentQuestion] = useState(0)
    const [timer, seTimer] = useState(0)

    const nextFunc = () => {
        setCurrentQuestion((ques) => ques + 1)
    }

    useEffect(() => {

        const timer = setTimeout(() => {
            nextFunc()
            seTimer(timer => timer + 1)
        }, 1000 * 2);
        if (curQuestion === 3) {
            clearTimeout(timer)
        }
        return () => clearTimeout(timer)

    }, [curQuestion])

    return (
        <>
            <div className=" timer">
                <p>{curQuestion + 1}/4</p>
                <div>0:{timer}</div>
            </div>
            <div className="box_shadow all_center coln_flex question_box">
                <h4>{QBank[curQuestion].question}</h4>
                <div className="answes_opt">
                    {
                        QBank[curQuestion].answers && QBank[curQuestion].answers.map((ans) => (
                            <>
                                <button className='btn marg05px'>{ans}</button>
                            </>
                        ))


                    }
                    <div className="spacer_01"></div>
                    <div className="all_center just_btw">
                        <button
                            disabled={curQuestion === 3} className='btn 
                        next_btn' onClick={nextFunc}> next </button>
                        <button
                            className='btn  next_btn'>Submit </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Questions