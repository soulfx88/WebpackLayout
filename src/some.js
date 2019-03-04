class Math {
    avg (x,y) {
        return x + y;
    }
    merge(x,y) {
        console.log(x);
        return {
            ...x,
            ...y
        }
    }
}
export default new Math();