;(async function main(BSON) {
    // let obj = {
    //     "cuki": "https://cuki.me/",
    //     "resources": "https://wiki.cuki.me/",
    //     "content": "Omaigotto, cái này là nội dung lậu nè, nó vẫn sẽ xem dc cho đến khi user xoá history."
    // }

    // let bytes = BSON.serialize(obj);
    // let str = String.fromCharCode(...bytes.map(x => 255 - x));
    // let bKey = encodeURIComponent(btoa(str));
    // console.log(bKey);

    // let _str = atob(decodeURIComponent(bKey))
    // console.log(str === _str)
    // let _bytes = Uint8Array.from(_str, x => 255 - x.charCodeAt(0))
    // console.log(bytes, _bytes)
    // let _obj = BSON.deserialize(_bytes);
    // console.log(_obj)
    // return 1;


    let referrer = new URL(document.referrer || location.href);
    let bKey = referrer.searchParams.get("bKey") ?? localStorage.getItem("bKey");

    if (!bKey) {
        document.writeln("Cái này hợp pháp nè, DMCA k đấm dc đâu.")
        return;
    }
    
    localStorage.setItem("bKey", bKey);
    let content = null;

    try {
        let str = atob(decodeURIComponent(bKey))
        let bytes = Uint8Array.from(_str, x => 255 - x.charCodeAt(0))
        let obj = BSON.deserialize(_bytes);
        let content = obj.content;
    }
    catch(e) {}

    document.writeln(content ?? "Lỗi dữ liệu.");
})(BSON);