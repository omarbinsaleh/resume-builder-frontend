import React, { useRef, useState } from 'react'
import { FiUser, FiUpload, FiTrash2, FiTrash } from 'react-icons/fi'

const PrifilePhotoSelector = ({ image, setImage, preview, setPreview }) => {
   const inputRef = useRef(null);
   const [previewUrl, setPreviewUrl] = useState(null);

   const handleImageChange = (e) => {
      const imgFile = e.target.files[0];

      if (imgFile) {
         // update the image state
         setImage(imgFile);

         // generate the preview URL from the imgFile
         const preview = URL.createObjectURL(imgFile);
         if (setPreview) {
            setPreview(preview);
         }
         setPreviewUrl(preview);
         console.log(preview);
      };
   };

   const handleRemoveImage = () => {
      setImage(null);
      setPreviewUrl(null);
      if (setPreview) {
         setPreview(null);
      };
   };

   const onChooseFile = () => {
      inputRef.current.click();
   };

   return (
      <div className='flex justify-center mb-6'>
         <input className='hidden' type='file' accept='image/*' ref={inputRef} onChange={handleImageChange} />

         {!image ? (
            <div className='w-20 h-20  bg-purple-50 flex items-center justify-center rounded-full relative cursor-pointer'>
               <FiUser className='text-4xl text-purple-500' />
               <button
                  className='w-8 h-8 flex items-center justify-center bg-linear-to-r from-purple-500/85 to-purple-700 text-white rounded-full absolute -bottom-1 -right-1 cursor-pointer focus:ring-2 ring-purple-500 ring-offset-2'
                  type='button'
                  onClick={onChooseFile}
               >
                  <FiUpload />
               </button>
            </div>
         ) : (
            <div className='relative'>
               <img 
               className='w-20 h-20 rounded-full object-cover'
               src={preview || previewUrl} 
               alt="Profile Picture"
                />

               <button
               type='button'
               className='w-8 h-8 flex items-center justify-center rounded-full bg-red-500 text-white absolute -bottom-1 -right-1 cursor-pointer'
               onClick={handleRemoveImage}
               >
                  <FiTrash2 />
               </button>
            </div>
         )}
      </div>
   )
}

export default PrifilePhotoSelector
