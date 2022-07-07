import React from 'react'
import { useSelector } from 'react-redux'
import QBank from '../question/QBank'
import { Link } from 'react-router-dom'

const ScoreBoard = () => {
    const count = useSelector((state) => state.counter.value)
    return (
        <>
            <div className="all_center just_btw  widthAll">
                <h1> <span ><Link to='/' className='marg05px'><i className="fa-solid fa-backward marg05px"></i>Back</Link></span> ScoreBoard</h1>
                <h1>Total Socre : {count} </h1>
            </div>
            <div className='align_start coln_flex'>
                <div className="spacer_01"></div>
                {
                    QBank.map(ques => (
                        <div className="coln_flex align_start" key={ques.questionId}>
                            <h4>Q: {ques.question}</h4>
                            <p className='correct'>correct answer: {ques.correct}</p>
                            <p className='inCorrect'>Your Answer:</p>
                            <div className="spacer_01"></div>
                        </div>
                    ))
                }

            </div>
        </>
    )
}

export default ScoreBoard