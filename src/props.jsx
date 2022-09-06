import React from 'react'
import './index.css'

class App extends React.Component {
    render() {
        // console.log(this.props.student.title)
        const { data } = this.props
        return (
            <div className='student-wrapper'>

                <h4 >Name: {data.title}  </h4>
                <h4>ID: {data.id}</h4>
                <h4>Major: {data.major || "aniqlanmagan"}</h4>
            </div >
        )
    }
}

export default App