import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  constructor(public crudService:CrudService,
    private firestore:AngularFirestore,
    private toastr:ToastrService) { }

  ngOnInit(): void {
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.crudService.formData = {
      id: null,
      task:"",
      state:false,
      date:""
    }
  }
  
  onSubmit(form: NgForm) {
    if(form.value.state===null||form.value.state==="")form.value.state=false;
    let data = Object.assign({}, form.value);
    delete data.id;//data.id özelliğini kaldırıyor 
    if (form.value.id == null){//formdan gelen id yoksa kaydediyor.formdan gelen id varsa formda bulunan idye göre güncelliyor.
      this.firestore.collection('TodoList').add(data);console.log("girdi");
    }
    else
      this.firestore.doc('TodoList/' + form.value.id).update(data);
    this.resetForm(form);
    this.toastr.success('Submitted successfully', 'Task added');
  }
}

