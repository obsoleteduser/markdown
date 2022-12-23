import './editor.css'

export const Editor = ({text, setText})=>{


    const textHandler  = event =>{
        setText(event.target.value)
    }

    return(
       <div className="editor">
         <textarea onChange={textHandler} name="" id="" cols="30" rows="10" defaultValue={text}></textarea>
       </div>
    )
}