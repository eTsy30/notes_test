export function getTags(data: {
    [x: string]: any; text:any
}){
   return data.text.split(' ').filter((leter:string) => leter[0] === '#')
        
}