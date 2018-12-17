import {Component, OnInit} from "@angular/core";
import {BoardsService} from "src/app/boards.service";

@Component({
  selector: "app-boards",
  templateUrl: "./boards.component.html",
  styleUrls: ["./boards.component.scss"]
})
export class BoardsComponent implements OnInit {
  boards: any[];
  constructor(private boardsService: BoardsService) {}

  ngOnInit() {
    this.boardsService.boardsChanged.subscribe(
      boards => (this.boards = boards)
    );
    this.boards = this.boardsService.getBoards();
  }
}
