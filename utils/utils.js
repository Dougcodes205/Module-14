const withAuth = (req, res, next) => {
    if (!req.session.loggedIn) {
      res.redirect('/login');
    } else {
      next();
    }
  };
  
  const format_date = (date) => {
    return `${new Date(date).toLocaleDateString('en-US')}`;
  };
  
  module.exports = { withAuth, format_date };