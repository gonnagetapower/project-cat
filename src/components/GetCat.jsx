import React from "react";
import * as axios from 'axios';
import styled from "styled-components";


const Button = styled.button`
  display: inline-block;
  font-size: 1em;
  margin-top: 10px;
  display: block;
  width: 250px;
`;

const Img = styled.img`
 width: 250px;
 height: 300px;
 object-fit: cover;
 margin-top: 5px;
`

class GetCat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cats: [],
            value: this.props,
            timeoutHolder: {}
        }
    }
    axiosFunc = () => {
        axios.get(`https://api.thecatapi.com/v1/images/search`)
            .then(res => {
                const cats = res.data;
                this.setState({ cats })
                if (this.props.value) { this.timeoutHolder = setTimeout(this.axiosFunc, 5000) };
            })
    }

    componentDidMount() {
        this.axiosFunc();
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.value !== this.props.value) {
            this.axiosFunc();
        }
    }
    componentWillUnmount(prevProps) {
        if (prevProps.value === this.props.value) {
           clearTimeout(this.timeoutHolder)
           this.timeoutHolder = 0
        }
    }
    render() {
        return (
            <div>
                <Button onClick={() => this.axiosFunc()}>Get Cat</Button>
                {this.state.cats.map(cat => <div key={cat.id}><Img src={cat.url}></Img></div>)}
            </div>
        )
    }
}

export default GetCat;