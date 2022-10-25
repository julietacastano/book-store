import {useState, createContext} from "react";

const Notification = ({severity, message}) =>{
    const notificationStyle = {
        position:'absolute',
        top:'120px',
        right:'20px',
        height:'auto',
        width:'auto',
        borderRadius:'5px',
        backgroundColor:severity === 'success' ? '#00b33c' : '#e60000',
        padding:'10px 15px'
    }

    if(message === '')return

    return(
        <div style={notificationStyle}>{message}</div>
    )
    
}

export const NotificationContext = createContext()


export const NotificationProvider = ({children}) =>{
    const [message, setMessage] = useState('')
    const [severity, setSeverity] = useState('')

    const setNotification = (message,severity) =>{
        setMessage(message);
        setSeverity(severity)

        setTimeout(() => {
            setMessage('')
        }, 3000)
    }

    return(
        <NotificationContext.Provider value={{setNotification}}>
            <Notification message={message} severity={severity} />
            {children}
        </NotificationContext.Provider>
    )
}

