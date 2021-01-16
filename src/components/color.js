import React from 'react'

class Color extends React.Component {

    render() {
        return (
                <div className="col border border-dark" style={{height: '70vh', backgroundColor: this.props.color.hex}}>
                    <div>
                        <button type="button" className="btn btn-dark" onClick={this.props.toggleLock}>{this.props.color.isLocked ? 'Lock' : 'Unlock'}</button>
                    </div>
                </div>
        )
    }
}

export default Color