module.exports = {
    index: (req, res) => res.redirect('/'),
    notFound: (req, res) => res.redirect('/errors/404'),
    goneWrong: (req, res) => res.redirect('/errors/somethings-gone-wrong'),

    // version 1
    v1Dashboard: (req, res) => res.redirect('/version-1/dashboard'),
    v1ListView: (req, res) => res.redirect('/version-1/listview'),

    // version 2
    v2ListView: (req, res) => res.redirect('/version-2/listview'),

    // version 3
    v3Dashboard: (req, res) => res.redirect('/version-3/dashboard'),
    v3Record: (req, res) => res.redirect(`/version-3/record/${res.locals.recordId}`)
};
