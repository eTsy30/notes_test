export function getTags(data: { text: string; }[]){
   return data.map((node: { text: string; }) =>
            node.text.split(' ').filter((leter: any) => leter[0] === '#')
        )
}