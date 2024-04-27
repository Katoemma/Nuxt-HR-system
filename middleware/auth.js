export default defineNuxtRouteMiddleware((to, from) => {
    const user = useSupabaseUser();
    
    // Redirect to login if user is not authenticated and trying to access protected pages
    if (!user.value && to.path !== "/login") {
        
        return navigateTo("/login");
    }

})
