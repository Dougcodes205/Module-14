const commentFormHandler = async function (event) {
    event.preventDefault();
    const postId = document.querySelector('input[name="post-id"]').value;
    const body = document.querySelector('textarea[name="comment-body"]').value;
    if (body) {
      await fetch('/api/comment', {
        method: 'POST',
        body: JSON.stringify({ postId, body }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      document.location.reload();
    }
  };
  
  // Edit Form Handler
  const editFormHandler = async function (event) {
    event.preventDefault();
    const postId = document.querySelector('input[name="post-id"]').value;
    const title = document.querySelector('input[name="post-title"]').value;
    const body = document.querySelector('textarea[name="post-body"]').value;
    await fetch(`/api/post/${postId}`, {
      method: 'PUT',
      body: JSON.stringify({ title, body }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    document.location.replace('/dashboard');
  };
  
  // Delete Click Handler
  const deleteClickHandler = async function () {
    const postId = document.querySelector('input[name="post-id"]').value;
    await fetch(`/api/post/${postId}`, {
      method: 'DELETE'
    });
    document.location.replace('/dashboard');
  };
  
  // Login Form Handler
  const loginFormHandler = async function (event) {
    event.preventDefault();
    const usernameEl = document.querySelector('#username-input-login');
    const passwordEl = document.querySelector('#password-input-login');
    const response = await fetch('/api/user/login', {
      method: 'POST',
      body: JSON.stringify({
        username: usernameEl.value,
        password: passwordEl.value,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to login');
    }
  };
  
  // Logout Handler
  const logout = async function () {
    const response = await fetch('/api/user/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log out');
    }
  };
  
  // New Form Handler
  const newFormHandler = async function (event) {
    event.preventDefault();
    const title = document.querySelector('input[name="post-title"]').value;
    const body = document.querySelector('textarea[name="post-body"]').value;
    await fetch(`/api/post`, {
      method: 'POST',
      body: JSON.stringify({ title, body }),
      headers: { 'Content-Type': 'application/json' },
    });
    document.location.replace('/dashboard');
  };
  
  // Signup Form Handler
  const signupFormHandler = async function (event) {
    event.preventDefault();
    const usernameEl = document.querySelector('#username-input-signup');
    const passwordEl = document.querySelector('#password-input-signup');
    const response = await fetch('/api/user', {
      method: 'POST',
      body: JSON.stringify({
        username: usernameEl.value,
        password: passwordEl.value,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to sign up');
    }
  };
  
// Event Listeners
document.querySelector('#new-comment-form').addEventListener('submit', commentFormHandler);
document.querySelector('#edit-post-form').addEventListener('submit', editFormHandler);
document.querySelector('#delete-btn').addEventListener('click', deleteClickHandler);
document.querySelector('#login-form').addEventListener('submit', loginFormHandler);
document.querySelector('#logout-link').addEventListener('click', logout);
document.querySelector('#new-post-form').addEventListener('submit', newFormHandler);
document.querySelector('#signup-form').addEventListener('submit', signupFormHandler);