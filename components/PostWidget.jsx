import React, { useState, useEffect } from 'react';
import Link from "next/link";
import moment from 'moment';

import { getRecentPosts, getSimilarPosts } from '../services/index';

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) => {
        setRelatedPosts(result);
      });
    } else {
      getRecentPosts().then((result) => {
        setRelatedPosts(result);
      });
    }
  }, [slug]);

  return (
    <div className='bg-white shadow-lg rounded-lg p-8 mb-8'>
      <h3>
        {slug ? 'Related Posts' : 'Recent Posts'}
      </h3>
      PostWidget
    </div>
  )
}

export default PostWidget