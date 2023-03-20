import React, { useContext, useState } from 'react'
import './Note.scss'

import { MdDeleteForever, MdEdit, MdAddCircle } from 'react-icons/md'
import { NoteContext } from '../Context/Context'
import { v4 as uuidv4 } from 'uuid'
import { noteProp } from '../../interfaces/note'



export const Note = (note: noteProp) => {
    const [isEdit, setEdit] = useState(true)
    const { delNotes, editNotes, setTag } = useContext(NoteContext)
    const { title, text, id, tag } = note
    const [titleNew, setTitle] = useState(title)
    const [textNew, setText] = useState(text)

    const handleClick = () => {
        setTag(tag)
    }
    const ChangesTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }
    const ChangesTextArea = (e: React.FormEvent<HTMLDivElement>)  => {
         setText(String(e.currentTarget.textContent))
    }


    return (
        <div className="wrapper">
            <div className="wrapper_name">
                {isEdit ? (
                    <h4 className="name_Note">{title}</h4>
                ) : (
                    <input
                        className="name_Note_edit"
                        onChange={ChangesTitle}
                        value={titleNew}
                    />
                )}
            </div>
            <div className="wrapper_text">
                {isEdit ? (
                    <div    dangerouslySetInnerHTML={{__html: text}} className="text"></div>
                ) : (
                    <div 
                    className="inputDiv"  
                    dangerouslySetInnerHTML={{__html:  textNew}} 
                    contentEditable="true" 
                    onBlur={(e)=>ChangesTextArea(e)} />
                )}
                <hr />
                <div className="wrapper_tag">
                    {tag?.map((tag: string) => {
                        return (
                            <button
                                key={uuidv4()}
                                className="tagButton"
                                onClick={handleClick}
                            >
                                {tag}
                            </button>
                        )
                    })}
                </div>
            </div>
         
            <div className="wrapper_btn">
                {isEdit ? (
                    <button className="btn" onClick={() => setEdit(!isEdit)}>
                        <MdEdit className="btn-add" />
                    </button>
                ) : (
                    <button
                        className="btn"
                        onClick={() => {
                            editNotes(id, titleNew, textNew, note.ind)
                            setEdit(!isEdit)
                        }}
                    >
                        <MdAddCircle className="btn-add" />
                    </button>
                )}
                <button
                    onClick={() => {
                        delNotes(id)
                    }}
                    className="btn"
                >
                    <MdDeleteForever className="btn-del" />
                </button>
            </div>
        </div>
    )
}
