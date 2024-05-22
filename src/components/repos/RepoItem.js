import React from 'react'

const RepoItem = (props) => {
    const {name, created_at, is_private, updated_at} = props.repo;
  return (
    <div className='grid-item'>
        <div style={styleRepo }>
            <p style={repoName}>{name}</p>
            <p>{is_private === true ? <p style={privateRepo}>Private</p> : <p style={privateRepo}>Public</p>}</p>
        </div>
      <p>{created_at}</p>
    </div>
  )
}
const styleRepo = {
    display: "flex",
    justifyContent: "space-between"
}
const repoName = {
    fontSize: "20px",
    color: "blue",
}
const privateRepo = {
    borderRadius: "5px",
    border: "1px solid black",
    padding: "1px",
    width: "70px",
    textAlign:"center"
}
export default RepoItem
