export const exitAccount = () => {
    window.location.href = '/login'
    document.cookie = 'name=0; path=/; max-age=-1'
    document.cookie = 'token=0; path=/; max-age=-1'
}