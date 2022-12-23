import Highlight from "react-highlight"
import ReactMarkdown from "react-markdown"
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight"
import './display.css'

export const Display = ({text})=>{
    return(
        <div className="display">
            
           

             <ReactMarkdown> 
                {text}
                </ReactMarkdown>    
               
            
           
        </div>
    )
}