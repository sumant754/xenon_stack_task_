import React, { useState } from 'react'
import Avatar from '@material-ui/core/Avatar';
import '../css/MessageSender.css'

function MessageSender({ handleSubmit, userInputVal, setUserInputVal }) {

  // const [imageData, setImageData] = useState(null);
  const getData = (e) => {
    const { value, name } = e.target;
    setUserInputVal(() => {
      return {
        ...userInputVal,
        [name]: value,
      };
    });
  };
  // function handleImageSelect(event) { const selectedFile = event.target.files[0]; const fileReader = new FileReader(); fileReader.onload = () => { const imageDataUrl = fileReader.result; localStorage.setItem("myImage", imageDataUrl); setImageData(imageDataUrl); }; fileReader.readAsDataURL(selectedFile); }




  return (
    <div className='messageSender'>
      <div className='messageSender_top'>
        <Avatar />
        {JSON.parse(localStorage.getItem("loggedUser")) && <h4 className='fName'>{JSON.parse(localStorage.getItem("loggedUser")).firstName}</h4>}
        <form onSubmit={handleSubmit}>
          <input type='text' name='postText' value={userInputVal.postText} className='messageSender_input'
            placeholder={'Whats in your mind'} onChange={getData} required />
          <input onChange={getData} name="postImage"
            placeholder='image Url (optional)' />


          {/* <input type="file" onChange={handleImageSelect} />
          <img src={imageData} alt="Uploaded image" /> */}


          <button className='submit-btn' type='submit'>Post</button>
        </form>
      </div>
    </div>
  )
}

export default MessageSender