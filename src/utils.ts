function getFileNameWithoutExtension(filename: string) {
    var pattern = /\.[A-Za-z]+$/;
    let ansMatch = pattern.exec(filename);
    if (ansMatch !== null) {
        return filename.slice(0, ansMatch.index);
    } else {
        return filename;
    }
}
  
function debounce(context: any, fn = () => {}, delay: number = 1000) {
    let timeout: any = null;
    return function () {
        clearTimeout(timeout);
  
        timeout = setTimeout(() => {
            fn.apply(context, []);
        }, delay);
    };
}
  
function getMarkDownTitle(data: string = "") {
    const titleMatchReg = /#+\s[^#\n]+/g;
    let matchResult = data.match(titleMatchReg) || [];
    data = matchResult.join("\n");
  
    return data;
}
  
export { getFileNameWithoutExtension, debounce, getMarkDownTitle };
  