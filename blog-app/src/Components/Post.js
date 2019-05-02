import React, { Component } from 'react'
import UpdatePost from './UpdatePost'
import axios from 'axios';


export default class Post extends Component {
    constructor(props) {
    super(props)
    this.state = {
        editPost: false,
        newContent: {
            title: '',
            contents: ''
        }
        }
    }


    changeHandler = e => {
       
        this.setState({
            newContent: {
                ...this.state.newContent,
                [e.target.name]: e.target.value
            }
        })
    }

    postEditor = e => {
        e.preventDefault();
        this.setState({
            editPost: !this.state.editPost
        })
    }

    postUpdate = e => {
        e.preventDefault();
        axios
            .put(`http://localhost:4000/api/posts/${this.props.ident}`, this.state.newContent)
            .then(response => {
                console.log(response)
                this.setState({
                    editPost: !this.state.editPost
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

  render() {
    const postStyle = {
        border: "1px solid whitesmoke",
        margin: "16px auto",
        width: "60%",
        borderRadius: "3px",
        background: "#fafafa"
      };
 
      console.log(this.state.newContent)
      
    return (
        <>
            {this.state.editPost ? <UpdatePost changeHandler={this.changeHandler} newContent={this.state.newContent} postEditor={this.postEditor} postUpdate={this.postUpdate} /> :
                <div style={postStyle}>
                    <h4>{this.props.contents}</h4>
                    <h3>{this.props.title}</h3>
                    <p>{this.props.created_at}</p>
                    <p>{this.props.ident}</p>
                    <button onClick={this.postEditor}>Edit Post</button>
                </div>
        }
        </>
    )
  }
}
