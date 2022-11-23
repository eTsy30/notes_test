import { useContext, useState } from 'react'
import './App.css'
import { Note } from './components/Note/Note'
import { Panel } from './components/Panel/Panel'
import { NoteContext } from './components/Context/Context'
type noteProp = {
    title: string
    text: string
    tag?: Array<string>
    id: string
    ind: string
}
function App() {
    const { noteData, filtrNotes, tag } = useContext(NoteContext)
    const [isTag, setTag] = useState('')
    const onButtonClick = (tag: string) => {
        filtrNotes(tag)
        setTag(tag)
    }
    console.log(noteData)

    return (
        <div className="App">
            <Panel />
            <div className="btnfilter_wrapper">
                {isTag && (
                    <button
                        className="btnfilter"
                        onClick={() => onButtonClick('')}
                    >
                        <span className="tag">{isTag}</span>
                        <span className="close">Close</span>
                    </button>
                )}
            </div>
            <div className="note_wrapper">
                {noteData &
                    noteData
                        // .filter(
                        //     (el: any) => tag !== null && !el.tag.includes(tag)
                        // )
                        .map((note: noteProp, index: string) => {
                            return (
                                <Note
                                    key={note.id}
                                    onButtonClick={onButtonClick}
                                    {...note}
                                    ind={index}
                                />
                            )
                            //
                        })}
            </div>
        </div>
    )
}

export default App
