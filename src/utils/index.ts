class Utils {
  public getNestedValue = (v: any, n: string) => {
    const arr = n.split(".");
    let va = v;
    for (let i = 0; i < arr.length; i++) {
      const el = arr[i];
      va = va[el];
    }
    return va;
  };
}

const utils = new Utils();
export default utils;
