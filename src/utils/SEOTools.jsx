



export const setTitle=(title)=>{
    if(!title||title===""){
        console.error("You Should Provide A Title .");
        return ;
    }
    document.title=title;
}