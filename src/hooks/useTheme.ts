import { ref, watchEffect } from "vue";



function currentTheme() {
    return localStorage.getItem('theme')  
}

let startValue = currentTheme()
if(startValue == null){
    startValue= 'light'
}

const theme = ref(startValue)

watchEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', theme.value)
    localStorage.setItem('theme', theme.value )
    }
)

export function useTheme(){
    function toggle(){

        theme.value = theme.value === 'light' ? 'dark' : 'light'
    }
    return {theme, toggle}
}