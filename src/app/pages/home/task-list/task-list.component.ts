import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { firestore } from 'firebase';
import { ToastrService } from 'ngx-toastr';
import { Task } from 'src/app/model/task';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  list: Task[];
  constructor(private crudService: CrudService,
    private firestore: AngularFirestore,
    private toastr:ToastrService) { }

    ngOnInit() {
      this.crudService.getTasks().subscribe(result => {
        this.list = result.map(item => {
          return  {
            id: item.payload.doc.id,
            ...item.payload.doc.data() as {}
          } as Task;;
        })
      });
    }
    onEdit(task: Task) {
      this.crudService.formData = Object.assign({}, task);
    }
  
    onDelete(id: string) {
      if (confirm("Are you sure to delete this record?")) {
        this.firestore.doc('TodoList/' + id).delete();
        this.toastr.warning('Deleted successfully','Task deleted');
      }
    }

}
