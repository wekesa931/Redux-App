export function moviesList(){
    return {
        type: "MOVIES_LIST",
        payload:[
            {id:1,name:"Pulp Fiction"},
            {id:2,name:"Pacific Rim"},
            {id:3,name:"Rambo"}
        ]
    }
}

export function directorsList(){
    return {
        type: "DIR_LIST",
        payload:[
            {id:1,name:"Betty Cheptoo"},
            {id:2,name:"Kinyanjui wangs"},
            {id:3,name:"Trevor Kurs"}
        ]
    }
}