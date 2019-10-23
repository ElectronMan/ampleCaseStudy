import axios from 'axios'

const getPosts = () => {
  try {
    return axios.get('https://jsonplaceholder.typicode.com/posts')
  } catch (error) {
    console.error(error)
  }
}

class PostsController {
  getAllPosts(req, res) {
    getPosts()
    .then(response => {
      if(response.data) {
        return res.status(200).send({
          success: 'true',
          message: 'posts retrieved successfully',
          posts: response.data
        });
      }
      else {
        return res.status(404).send({
          success: 'false',
          message: 'No Posts',
        });
      }
    })
    .catch(error => {
      console.log(error)
      return res.status(404).send({
        success: 'false',
        message: 'No Posts',
      });
    })
    
  }
}

const postsController = new PostsController();
export default postsController;