export default ({ app }) => {
    app.router.afterEach((to, from, next) => {
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
    });
}    