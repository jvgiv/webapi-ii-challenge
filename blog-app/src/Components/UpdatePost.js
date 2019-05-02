import React, { Component } from 'react'

export default class UpdatePost extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
    

  render() {
    const postStyle = {
        border: "1px solid whitesmoke",
        margin: "16px auto",
        width: "60%",
        borderRadius: "3px",
        background: "#606060",
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        height: '200px'
      }; 

      const form = {
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        width: '80%',
        margin: '20px auto'
    }

    return (
      <div style={postStyle}>
        <form style={form}>
            <input 
                placeholder='Title'
                type="text"
                name="contents"
                value={this.props.newContent.contents}
                onChange={this.props.changeHandler}
            />
            <input 
                placeholder='Contents'
                type="text"
                name="title"
                value={this.props.newContent.title}
                onChange={this.props.changeHandler}
            />
            <button onClick={(event) => this.props.postUpdate(event)}>Update Post</button>
            <button onClick={this.props.postEditor}>Cancel</button>
        </form>
      </div>
    )
  }
}
