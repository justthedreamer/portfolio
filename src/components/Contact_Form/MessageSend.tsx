import { useState } from "react"

interface IMessagePopup{
    isMessagePopupActive: boolean;
    setMessagePopupState: (active: boolean) => void;
}

export const MessageSend: React.FC<IMessagePopup> = ({ isMessagePopupActive, setMessagePopupState }) =>{

    if(isMessagePopupActive){
        setTimeout(()=>{
            setMessagePopupState(!isMessagePopupActive);
        },3000)
    }

    return (
        <div className={`message-send ${isMessagePopupActive? "active" : ""}`}>
            <p>Your message has been send! Thank you.</p>
        </div>
    )
}