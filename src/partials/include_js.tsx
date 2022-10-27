export const appendScript = (scriptToAppend: string) => {
    const script = document.createElement("script");
    script.src = scriptToAppend;
    script.async = false;
    document.body.appendChild(script);    
}