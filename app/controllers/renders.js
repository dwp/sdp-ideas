module.exports = {
    index: (req, res) => res.render('index'),
    goneWrong: (req, res) => res.render('errors/somethings-gone-wrong'),
    notFound: (req, res) => res.render('errors/404'),

    // version 1
    v1Login: (req, res) => res.render('version-1/login'),
    v1Dashboard: (req, res) => res.render('version-1/dashboard'),
    v1ListView: (req, res) => res.render('version-1/list-view'),
    v1Record: (req, res) => res.render('version-1/record'),

    // version 2
    v2Login: (req, res) => res.render('version-2/login'),
    v2ListView: (req, res) => res.render('version-2/list-view'),
    v2Record: (req, res) => res.render('version-2/record'),

    // version 3
    v3Login: (req, res) => res.render('version-3/login'),
    v3Dashboard: (req, res) => res.render('version-3/dashboard'),
    v3Record: (req, res) => res.render('version-3/record')

};
