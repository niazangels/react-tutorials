import React from 'react';

class ImageCard extends React.Component {

    constructor(props) {
        super(props);
        this.imageRef = React.createRef()
        this.state = { spans: 0 }
    }

    componentDidMount() {
        // The following won't work. Image might not have been fetched yet.
        // console.log(this.imageRef.current.clientHeight)
        this.imageRef.current.addEventListener('load', this.setSpans)
    }

    // Callbacks have to be bound. So use arrow functions
    setSpans = () => {
        // console.log(this.imageRef.current.clientHeight)
        const height = this.imageRef.current.height;
        const spans = Math.ceil(height / 10 + 1);
        // this.setState({spans: spans})
        this.setState({ spans })
    };

    render() {
        const { description, urls } = this.props.image;
        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img ref={this.imageRef} alt={description} src={urls.regular} />
            </div>
        )
    }
}

export default ImageCard;