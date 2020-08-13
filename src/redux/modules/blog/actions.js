import {
  POST_GET,
  POST_SET
} from './const';

export const getPost = (id) => (
  {
    type: POST_GET,
    id
  }
);

export const loadPosts = (posts) => (
  {
    type: POST_SET,
    posts
  }
);
