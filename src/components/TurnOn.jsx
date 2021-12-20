import React from 'react';
class TurnOn extends React.Component {
    constructor(props) {
        super(props);
        this.state = { checked: props };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
            this.props.onBoxChange(!this.props.checked)
            console.log(this.props.checked)
    }

    render() {
        return <div>
            <div>

                <input
                    type="checkbox"
                    checked={this.props.checked}
                    onChange={this.handleChange} />
                <label>Enable</label>
            </div>
        </div>;
    }
}

export default TurnOn;
