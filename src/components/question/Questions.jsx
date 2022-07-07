import React, { useState, useEffect } from 'react'
import './question.css'
import QBank from './QBank'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, score } from '../../redux/counterSlice.js'
import ScoreBoard from '../score/ScoreBoard'
import { Link } from 'react-router-dom'

const Questions = () => {
    const [curQuestion, setCurrentQuestion] = useState(0)
    const [timer, setTimer] = useState(20)
    const [value, setValue] = useState('')
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    const nextFunc = () => {
        setCurrentQuestion((ques) => ques + 1)
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            return nextFunc()
        }, 20000);
        if (curQuestion === 3) {
            clearTimeout(timer)
        }
        return () => clearTimeout(timer)
    })


    const handleAnswer = (e) => {
        setValue(e.target.value);
        console.log(e.target.value);
        if (QBank[curQuestion].correct === e.target.value) {
            return dispatch(score())
        } else if (QBank[curQuestion].correct !== e.target.value) {
            return dispatch(decrement())
        }
    }

    return (
        <>
            <div className=" timer">
                <p>{curQuestion + 1}/4</p>
                <div>00:{timer}</div>
                <div> score: {count}</div>
            </div>
            <div className="box_shadow all_center coln_flex question_box">
                <h4>{QBank[curQuestion].question}</h4>
                <div className="answes_opt">
                    {
                        QBank[curQuestion].answers && QBank[curQuestion].answers.map((ans, index) => (
                            <div key={index}>
                                <label>
                                    <button className='btn marg05px'
                                        value={ans}
                                        name={ans}
                                        onClick={handleAnswer} >{ans}</button>
                                </label>
                            </div>
                        ))


                    }
                    <div className="spacer_01"></div>
                    <div className="all_center just_btw">
                        <button
                            disabled={curQuestion === 3} className='btn 
                        next_btn' onClick={nextFunc}> next </button>
                        <Link
                            className='btn  next_btn'
                            disabled={value === ''}
                            to='/ScoreBoard'
                        >Submit </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Questions