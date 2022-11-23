import { createContext, useState, useEffect } from 'react'
import data from '../data.json'
export const NoteContext = createContext()

export const Context = (props) => {
    const [noteData, setNoteData] = useState(data)
    const [tag, setTag] = useState(null)
    useEffect(() => {
        // setNoteData(data)
        filterTag(data)
    }, [])

    const filtrNotes = (tag) => {
        console.log(tag, 'tag')
        const nqew = noteData.filter((el) => {
            return el.tag.includes(`${tag}`)
        })
        if (tag) {
            setNoteData(nqew)
            console.log(nqew, 'filtr')
        } else {
            setNoteData(data)
            console.log(data, 'temp')
        }
    }

    const filterTag = (noteData) => {
        const x = noteData.map((noteData) => {
            return noteData.text.split(' ').filter((leter) => {
                return leter[0] === '#'
            })
        })
        const temp = [...noteData]
        temp.forEach((el, index) => {
            el.tag = x[index]
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
        filtrNotes,
        filterTag,
        setTag,
        tag,
    }
    return (
        <NoteContext.Provider value={value}>
            {props.children}
        </NoteContext.Provider>
    )
}
