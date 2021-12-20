import React from 'react';

class Refresh extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: props };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
            this.props.onBoxRefreshChange(!this.props.value)
    }

    render() {
        return <div>
            <div>

                <input
                    type="checkbox"
                    checked={this.props.value}
                    onChange={this.handleChange} />
                <label>Auto-refrash every 5 seconds</label>
            </div>
        </div>;
    }
}

export default Refresh;
