export function movieList(){
    return{
        type:'MOVIES_LIST',
        payload:[
            {id:1, name:'Mad Max'},
            {id:2, name:'Jab We Met'},
            {id:3, name:'Avengers'}
        ]
    }
}