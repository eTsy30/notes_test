import { useContext } from 'react'
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
    const { noteData, selectedTag, setTag } = useContext(NoteContext)
    const onButtonClick = (tag: string) => {
        setTag(tag)
    }
    const clearSelectedTag = () => {
        setTag(null)
    }
    if (!noteData) return null

    return (
        <div className="App">
            <Panel />
            <div className="btnfilter_wrapper">
                {selectedTag && (
                    <button className="btnfilter" onClick={clearSelectedTag}>
                        <span className="tag">{selectedTag[0]}</span>
                        <span className="close">Close</span>
                    </button>
                )}
            </div>
            <div className="note_wrapper">
                {noteData
                    .filter((el: any) => {
                        if (selectedTag) {
                            return el.tag.includes(selectedTag[0])
                        }
                        return true
                    })
                    .map((note: any, index: string) => {
                        return (
                            <Note
                                key={note.id}
                                onButtonClick={onButtonClick}
                                {...note}
                                ind={index}
                            />
                        )
                    })}
            </div>
        </div>
    )
}

export default App
