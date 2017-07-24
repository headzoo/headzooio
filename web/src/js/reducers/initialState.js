export default {
  auth: {
    isAuthenticated: false,
    isFetching: false,
    errorMessage: ''
  },
  posts: {
    posts: [],
    isFetching: false
  },
  contact: {
    name:         '',
    email:        '',
    subject:      '',
    message:      '',
    errorMessage: '',
    isSubmitting: false,
    isSubmitted:  false
  },
  write: {
    title:        '',
    content:      '',
    imageURL:     '',
    errorMessage: '',
    isSubmitting: false,
    isSubmitted:  false
  }
}
