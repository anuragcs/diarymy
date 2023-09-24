/**
 * GET /
 * Homepage 
*/
exports.homepage = async (req, res) => {
  const locals = {
    title: "Diary",
    description: "Diary App.",
  }
  res.render('index', {
    locals,
    layout: '../views/layouts/front-page'
  });
}


/**
 * GET /
 * About 
*/
exports.about = async (req, res) => {
  const locals = {
    title: "About - Diary",
    description: "Diary App.",
  }
  res.render('about', locals);
}