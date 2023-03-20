export function tagSelect(tags:string[], text:string) {
    for (const key in tags) {
        const tempTag = tags[key].split("").slice(1).join('')
        const regExp = new RegExp(tempTag, "g");
        text = text.replace(regExp, `<span style="font-size:18px; color:#BF3853">${tempTag}</span>`);
    }
    return text

}