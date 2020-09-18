export function getFileNameWithoutExtension(filename: string) {
    var pattern = /\.[A-Za-z]+$/;
    let ansMatch = pattern.exec(filename);
    if (ansMatch !== null) {
        return (filename.slice(0, ansMatch.index));
    } else {
        return filename;
    }
}
