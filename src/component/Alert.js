import React from 'react'

function Alert(props) {
    return (
        <div style={{height:'50px'}}>
        {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">  {/*here we use props.alert && this is because initially props.alert is null we mention   */}
        <strong> {props.alert.type}</strong> {props.alert.msg}  {/*as we make object of showAlert and we pass 2 argument to call them we use this method */}
        </div>}
        </div>
    )
}

export default Alert