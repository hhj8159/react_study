import React from 'react';

const styles = {
  wrapper : {
    margin:8,
    padding:8,
    display:"flex",
    flexDirection:"row",
    border:"1px solid grey",
    borderRadius:"1em",
  },
  imageContainer : {},
  image: {
    width:50,
    heigght:50,
    borderRadius:25,
  },
  contentContainer: {
    marginLeft:8,
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
  },
  nameText: {
    color:"black",
    fontSize:16,
    fontWeight:"bold",
  },
  commentText: {
    color:"black",
    fontSize: 16,
  },
};

function Comment(props) {
  return (
    <div style={styles.wrapper}>
      <div style={styles.imageContainer}>
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" 
          style={styles.image} 
        />
      </div>
      <div style={styles.contentContainer}>
        <span style={styles.nameText}>{props.name}</span>
        <span style={(_)=>{return {...styles.commentText, color:"blue"}}}>{props.comment}</span>
        {/* _ 는 아무거나 올 수 있다 */}
      </div>
    </div>
  );
}

export default Comment;
