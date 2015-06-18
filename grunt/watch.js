/*jslint indent: 4 */
/*global module */
module.exports = {
    options: {
        cwd: '.',
        livereload: true,
        livereloadOnError: false
    },
    styles: {
        files: ['./src/**/*.less', './docs/**/*.md', './docs/**/*.json', './layout/joli-markdown/**/*.html'],
        tasks: ['less', 'autoprefixer', 'joli_markdown']
    }
};
