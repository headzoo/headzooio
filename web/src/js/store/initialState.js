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
    published:    true,
    isSubmitting: false,
    isSubmitted:  false
  },
  contact: {
    name:         '',
    email:        '',
    subject:      '',
    message:      '',
    errorMessage: '',
    isSubmitting: false,
    isSubmitted:  false
  }
};
