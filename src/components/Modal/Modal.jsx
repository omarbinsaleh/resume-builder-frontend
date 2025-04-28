import React from 'react'
import { FaCross } from 'react-icons/fa'
import { RxCross2 } from "react-icons/rx";

const Modal = ({ 
   children, 
   isOpen, 
   onClose, 
   hideHeader,
   title,
   showActionBtn,
   actionBtnIcon = null,
   actionBtnText,
   onActionClick
}) => {
  return (
    isOpen && <div className='fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-black/40'>
    {/* Modal Content */}
    <div className={`relative flex flex-col bg-white shadow-lg rounded-lg overflow-hidden`}>
       {/* Modal Header */}
       {!hideHeader && (
          <div className='flex items-center justify-between p-4 border-b border-gray-200'>
             <h3 className='md:text-lg font-medium text-gray-900'>{title}</h3>
             {showActionBtn && (
                <button
                   className='btn-small-light mr-12'
                   onClick={() => onActionClick()}
                >
                   {actionBtnIcon}
                   {actionBtnText}
                </button>
             )}
          </div>
       )}

       <button 
          type='button' 
          onClick={onClose} 
          className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex items-center justify-center absolute top-3.5 right-3.5 cursor-pointer'
       >
          <RxCross2 className='' />
       </button>

       {/* Modal Body Scrollable */}
       <div className='flex-1 overflow-y-auto custom-scrollbar'>
          {children}
       </div>
    </div>
  </div>
  )
}

export default Modal
