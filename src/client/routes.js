import login from './components/containers/login'
import notfound from './components/containers/notfound'
import projects from './components/containers/projects'

export default {
  '/projects': projects,
  '/': login,
  '*': notfound
}
