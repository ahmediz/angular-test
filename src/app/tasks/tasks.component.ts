import {Component, OnInit, Input} from "@angular/core";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag
} from "@angular/cdk/drag-drop";
import {BoardsService} from "src/app/boards.service";

@Component({
  selector: "app-tasks",
  templateUrl: "./tasks.component.html",
  styleUrls: ["./tasks.component.scss"]
})
export class TasksComponent implements OnInit {
  @Input() tasks: string[];
  @Input() changedBoards;
  constructor(private boardsService: BoardsService) {}

  ngOnInit() {
    const newBoards = this.changedBoards.map(item =>
      !item.tasks ? {tasks: [], title: item.title} : item
    );
    this.boardsService.saveBoards(newBoards);
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
    this.boardsService.saveBoards(this.changedBoards);
  }
}
