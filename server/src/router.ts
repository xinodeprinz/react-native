import { Router } from 'express';
import { create, destroy, getBlogs, getSingleBlog, update } from './controllers/main.controller.js';

const router: Router = Router();

router.post('/create', create);
router.put('/update/:id', update);
router.delete('/delete/:id', destroy);
router.get('/blogs', getBlogs);
router.get('/blogs/:id', getSingleBlog);

export default router;