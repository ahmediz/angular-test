import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Subject} from "rxjs";

@Injectable({
  providedIn: "root"
})
export class BoardsService {
  boards: any[];
  boardsChanged = new Subject<any[]>();
  isLoading = new Subject<boolean>();

  constructor(private http: HttpClient) {
    this.isLoading.next(true);
    this.http
      .get("https://angular-test-290e5.firebaseio.com/boards.json")
      .subscribe(boards => {
        this.setBoards(boards);
        this.isLoading.next(false);
      });
  }

  setBoards(boards) {
    this.boards = boards;
    this.boardsChanged.next(boards);
  }

  getBoards() {
    return this.boards;
  }

  saveBoards(boards) {
    this.http
      .put("https://angular-test-290e5.firebaseio.com/boards.json", boards)
      .subscribe();
    this.boardsChanged.next(boards);
  }
}
