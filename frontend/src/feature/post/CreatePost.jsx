import React, { useRef, useState } from 'react'
import { CiImageOn } from "react-icons/ci";
import { BsEmojiSmileFill } from "react-icons/bs";
import { IoCloseSharp } from 'react-icons/io5';
import useUser from './../../hook/useUser'
import useCreatePost from './useCreatePost';

function CreatePost() {
  const imgRef = useRef();
  const [text, setText] = useState('');
  const [image, setImage] = useState();
  const { isLoading, authUser } = useUser();
  const { isCreating, createPost } = useCreatePost();
  const handelChangeImg = (e) => {
    // if (e.target.files) {
    //   setImage(URL.createObjectURL(e.target.files[0]))
    // }

    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('hana');

    createPost({ text, img: image }, {
      onSuccess: () => {
        setImage('');
        setText('');
        imgRef.current.value = null;
      }
    })
  }
  return (
    <div className='w-full p-4 flex gap-4 border-x border-secondary-300'>
      <img src={`${authUser.profileImg || '/avatar-placeholder.png'} `} alt="profile" className='w-8 h-8 rounded-full' />
      <form className='w-full space-y-1' onSubmit={handleSubmit}>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          name="text"
          className='bg-transparent outline-none w-full text-secondary-800 placeholder:text-secondary-500 border-b border-secondary-400 h-[4rem] resize-none'
          placeholder='What is happening?!'
        ></textarea>
        {image && <div className='flex flex-col items-end w-[90%] md:w-[70%] lg:w-[60%]  m-auto'>
          <IoCloseSharp
            onClick={
              () => {
                setImage(null);
                imgRef.current.value = null;
              }

            }
            className='w-6 h-6 text-secondary-800 cursor-pointer mb-3' />
          <img src={image} alt="post Image" className='w-full h-72 mb-3 object-contain' />
        </div>}
        <div className='flex items-center justify-between border-t border-secondary-400 py-2'>
          <div className='flex gap-2'>
            <CiImageOn onClick={() => imgRef.current.click()} className='text-primary-800 w-7 h-7 cursor-pointer' />
            <input type="file" ref={imgRef} className='hidden' accept="image/*" onChange={handelChangeImg} />
            <BsEmojiSmileFill className='text-primary-800 w-6 h-6 cursor-pointer' />
          </div>
          <button className='bg-primary-900 text-secondary-800 rounded-full px-4 py-1'>Post</button>
        </div>
      </form>

    </div>
  )
}

export default CreatePost
