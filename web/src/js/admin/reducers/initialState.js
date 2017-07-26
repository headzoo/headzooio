export default {
  posts: {
    posts:      [],
    post:       {},
    isFetching: false
  },
  auth: {
    isAuthenticated: false,
    isFetching:      false,
    errorMessage:    ''
  },
  write: {
    title:        '',
    content:      '',
    imageURL:     '',
    errorMessage: '',
    isSubmitting: false,
    isSubmitted:  false
  }
};
