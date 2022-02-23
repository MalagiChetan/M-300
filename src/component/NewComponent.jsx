import axios from 'axios'
import React, { useState } from 'react'


function NewComponent() {
    const [post, setPost] = useState([])
    const [search, setSearch] = useState('')
    const [copy, setCopy] = useState([])

    const fetchData = async () => {
        const url = 'https://jsonplaceholder.typicode.com/posts'
        const response = await axios.get(url)
        setPost(response.data)
        setCopy(response.data)
    }
    const handleChange = (event) => {
        event.preventDefault()
        setSearch(event.target.value)
        let searched = post.filter((item) => {
            if (item.title.includes(search)) {
                return item
            }
        })
        setCopy(searched)
    }

    return (
        <div>
            <button onClick={() => { fetchData() }}>Fetch</button>
            <br />
            <input type='text' onChange={(e) => { handleChange(e) }} />
            <button >Search</button>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Post ID</th>
                        <th scope="col">Post Title</th>
                        <th scope="col">Post Body</th>
                        <th scope="col">User ID</th>
                    </tr>
                </thead>
                <tbody>
                    {copy.map((item, ind) => {
                        return <tr key={ind}>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.body}</td>
                            <td>{item.userId}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default NewComponent