import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";
import { Task } from '../model/task';
@Injectable({
  providedIn: 'root'
})
export class CrudService {
  formData:Task;
  

  constructor(private firestore: AngularFirestore) { }

  getTasks() {
    return this.firestore.collection('TodoList').snapshotChanges();
  }


}
