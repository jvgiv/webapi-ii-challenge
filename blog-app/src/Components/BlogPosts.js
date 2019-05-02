import React, { Component } from 'react'
import axios from 'axios'
import Post from './Post'

export default class BlogPosts extends Component {
    constructor() {
        super();
        this.state = {
            blogPosts: []
        }
    }


    componentDidMount() {
        axios
            .get(`http://localhost:4000/api/posts/`)
            .then(response => {
                console.log(response)
                this.setState({
                    blogPosts: response.data
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    
  render() {

    

    return (
      <div>
        {this.state.blogPosts.map(eachItem => {
            return (
                <Post 
                    key={eachItem.id}
                    ident={eachItem.id}
                    title={eachItem.title}
                    contents={eachItem.contents}
                    created_at={eachItem.created_at}
                />
            )
        })}
      </div>
    )
  }
}
