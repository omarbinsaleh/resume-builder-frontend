import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import heroImg from '../assets/bg-hero.png';
import FeatureCard from '../components/FeatureCard/FeatureCard';

function LandingPage() {
  const [openAuthModal, setOpenAuthModal] = useState(false)
  const [currentPage, setCurrentPage] = useState('login')

  return (
    <div className='w-full min-h-screen bg-white'>
      <div className='container mx-auto px-4 py-6'>
        {/* Header */}
        <header className='flex justify-between items-center mb-16'>
          <div className='text-xl font-bold'>Resume Builder</div>
          <button
            className='bg-purple-100 text-sm font-semibold text-black px-7 py-2.5 rounded-lg hover:bg-gray-800 hover:text-white transition-colors cursor-pointer'
            onClick={() => setOpenAuthModal(true)}
          >Login / Sign Up</button>
        </header>

        {/* Hero Content */}
        <section className='flex flex-col md:flex-row items-center'>
          <div className='w-full md:w-1/2 pr-4 mb-8 md:mb-0'>
            <h1 className='text-5xl font-bold mb-6 leading-tight'>
              Build Your {''}
              <span className='text-transparent bg-clip-text bg-[radial-gradient(circle,_#7182ff_0%,_#3cff52_100%)] bg-[length:200%_200%] animate-text-shine'>
                Resume Effortlessly
              </span>
            </h1>
            <p className='text-lg text-gray-700 mb-8'>
              Craft a standout resume in minute with our smart and intuitive resume builder
            </p>
            <button
              className='bg-black text-sm font-semibold text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer'
            >
              Get Started
            </button>
          </div>
          <div className='w-full md:w-1/2'>
            <img 
            src={heroImg} alt="Hero Image" 
            className='w-full rounded-lg'
            />
          </div>
        </section>

        <section className='mt-16'>
          <h2 className='text-2xl font-bold text-center mb-12'>
            Features That Make You Shine
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <FeatureCard 
              title='Easy Editing' 
              description='Update your resume with live preview and instant formating' 
            />
            <FeatureCard 
              title='Beautiful Templates' 
              description='Choose from modern, professional templates that are easy to customize' 
            />
            <FeatureCard 
              title='One-Click Export' 
              description='Download your resume instantly as a high quality PDF with one click' 
            />
          </div>
        </section>

        <section className='text-sm bg-gray-50 text-secondary text-center p-5 mt-5'>
          Made with ❤️ by Omar Bin Saleh
        </section>
      </div>
    </div>
  )
}

export default LandingPage
