//备课内容：用js实现冒泡排序
//备课人：韦晓余
//2020年11月1日

function arrStort() {
    var arr = [1, 5, 19, 2, -1, 34, 23, 120, 29];
    for (var index = 0; index < arr.length; index++) {
        for (let subIndex = 0; subIndex < arr.length - 1 - index; subIndex++) {
            if (arr[subIndex] > arr[subIndex + 1]) {
                let temp = arr[subIndex + 1];
                arr[subIndex + 1] = arr[subIndex];
                arr[subIndex] = temp
            }
        }
    }
    console.log(arr)
}
arrStort();
