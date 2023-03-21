import { useContext } from 'react'
import './mainPageStyle.css'

import { AiOutlineClear } from "react-icons/ai";
import { Note } from 'components/Note/Note';
import { Panel } from 'components/Panel/Panel';
import { NoteContext } from 'components/Context/Context';

export type noteProp = {
    title: string
    text: string
    tag?: string[]
    id: string
    ind: string
    onButtonClick?:(args:string)=>void
}
function MainPage() {
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
                        <span className="close"> <AiOutlineClear/>Close </span>
                        <span className="tag">{selectedTag[0]}</span>
                    </button>
                )}
            </div>
            <div className="note_wrapper">
                {noteData
                    .filter((el: { tag: string | any[] }) => { 
                        if (selectedTag) {
                            return el.tag.includes(selectedTag[0])
                        }
                        return true
                    })
                    .map((note: JSX.IntrinsicAttributes & noteProp, index: string) => {
                
                        
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

export default MainPage
