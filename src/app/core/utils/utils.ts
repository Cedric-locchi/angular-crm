export class Utils {

  static sumDocElement(tab) {
    let counter = 0;

    for (let item of tab) {
      counter = counter + item.total;
    }

    return counter;

  }

}
