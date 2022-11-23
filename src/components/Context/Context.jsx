import { createContext, useState, useEffect } from 'react'
import data from '../data.json'
export const NoteContext = createContext()

export const Context = (props) => {
    const [noteData, setNoteData] = useState(null)
    const [selectedTag, setTag] = useState(null)
    useEffect(() => {
        filterTag(data)
    }, [])
    const filterTag = (noteData) => {
        const listTag = noteData.map((node) =>
            node.text.split(' ').filter((leter) => leter[0] === '#')
        )

        const temp = [...noteData]
        temp.forEach((el, index) => {
            el.tag = listTag[index]
        })
        setNoteData(temp)
    }

    const addNotes = (note) => {
        const tag = note.text.split(' ').filter((leter) => {
            return leter[0] === '#'
        })
        note.tag = tag
        setNoteData([...noteData, note])
    }

    const editNotes = (id, titleNew, textNew, index) => {
        const tag = textNew.split(' ').filter((leter) => {
            return leter[0] === '#'
        })

        const newNote = {
            id: id,
            title: titleNew,
            text: textNew,
            tag: tag,
        }
        const temp = [...noteData]
        temp.splice(index, 1, newNote)
        setNoteData(temp)
    }

    const delNotes = (noteID) => {
        setNoteData(
            noteData.filter((note) => {
                return note.id !== noteID
            })
        )
    }
    const value = {
        noteData,
        addNotes,
        delNotes,
        editNotes,
        filterTag,
        setTag,
        selectedTag,
    }
    return (
        <NoteContext.Provider value={value}>
            {props.children}
        </NoteContext.Provider>
    )
}
