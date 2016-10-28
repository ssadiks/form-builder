import { Router } from 'express';
import * as PostController from '../controllers/post.controller';
const router = new Router();

// Get all Posts
router.route('/towers').get(PostController.getPosts);

// Get one post by cuid
router.route('/towers/:tower_id').get(PostController.getPost);

// Add a new Post
router.route('/towers/:tower_id/heroes').post(PostController.addPost);

// Delete a post by cuid
router.route('/towers/:tower_id/heroes/:hero_id').delete(PostController.deletePost);

export default router;