export class Todo {

  id: number = Date.now();

  constructor(public title: string,
    public discription: string,
    public date: string,
    public completed: boolean = false) { }
}