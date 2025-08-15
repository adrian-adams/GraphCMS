import React from 'react';
import moment from 'moment';
import Link from 'next/link';

const DateSVG = () => {
  return (
    <>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="#883407" d="M5.673 0a.7.7 0 0 1 .7.7v1.309h7.517v-1.3a.7.7 0 0 1 1.4 0v1.3H18a2 2 0 0 1 2 1.999v13.993A2 2 0 0 1 18 20H2a2 2 0 0 1-2-1.999V4.008a2 2 0 0 1 2-1.999h2.973V.699a.7.7 0 0 1 .7-.699M1.4 7.742v10.259a.6.6 0 0 0 .6.6h16a.6.6 0 0 0 .6-.6V7.756zm5.267 6.877v1.666H5v-1.666zm4.166 0v1.666H9.167v-1.666zm4.167 0v1.666h-1.667v-1.666zm-8.333-3.977v1.666H5v-1.666zm4.166 0v1.666H9.167v-1.666zm4.167 0v1.666h-1.667v-1.666zM4.973 3.408H2a.6.6 0 0 0-.6.6v2.335l17.2.014V4.008a.6.6 0 0 0-.6-.6h-2.71v.929a.7.7 0 0 1-1.4 0v-.929H6.373v.92a.7.7 0 0 1-1.4 0z"/></svg>
    </>
  )
};

const PostCard = ({post}) => {
  return (
    <div className='mb-4 bg-white text-center shadow-lg rounded-lg p-0 lg:p-4'>
      <div className='relative overflow-hidden shadow-md pb-80 mb-6'>
        <img 
          src={post.featuredImage.url} 
          alt={post.title} 
          className='object-top absolute h-full w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg'
        />
      </div>  
      <h1 className='transition duration-200 text-center cursor-pointer hover:text-blue-300 text-3xl font-semibold inline'>
        <Link href={`/post/${post.slug}`}>
          {post.title}
        </Link>
      </h1>
      <div className='block lg:flex flex-col items-center justify-center w-full mt-4'>
        <div className='flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8 items-center'>
          <img 
            src={post.author.photo.url}
            alt={post.author.name}
            width="30px"
            height="30px"
            className='align-middle rounded-full'
          />
          <p className='inline align-middle text-gray-700 ml-2 text-lg'>
            {post.author.name}
          </p>
        </div>
        <div className='font-medium text-gray-700 flex flex-row items-center justify-center gap-2'>
              <DateSVG className='h-6 w-6' />
              <span className='align-middle'>
                {moment(post.createdAt).format('MMM DD, YYYY')}
              </span>
        </div>
        <div className='text-gray-700 font-normal mb-8 p-5 md:px-10 py-6'>
          <p>{post.excerpt}</p>
          <div>
            <Link href={`/post/${post.slug}`}>
              <span className='transition duraiton-500 transform hover:-translate-y-1 inline-block bg-blue-300 px-4 py-2 rounded-3xl font-bold my-4'>Continue Reading</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostCard