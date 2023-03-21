import React, { useContext, useState } from 'react'
import './Panel.scss'
import { MdAddCircle } from 'react-icons/md'
import { NoteContext } from '../Context/Context'
import { v4 as uuidv4 } from 'uuid'
export const Panel = () => {
    const { addNotes } = useContext(NoteContext)
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const addNewNote = () => {
        setText('')
        setTitle('')
        addNotes(newNote)
    }
    const ChangesTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }
    const ChangesText = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }
    const newNote = {
        id: uuidv4(),
        title: `${title}`,
        text: `${text}`,
    }
    return (
        <div className="container-Panel">
            <input
                type="text"
                placeholder="Add your title"
                onChange={ChangesTitle}
                value={title}
            />
            <input
                type="text"
                placeholder="Add your note"
                onChange={ChangesText}
                value={text}
            /> {title&&text?<button  onClick={addNewNote} className="btn-Panel">
            <MdAddCircle className="btn-add" />
        </button>: <MdAddCircle className="btn-add-disabled" />}
            
        </div>
    )
}
