import { Component, OnInit } from '@angular/core';
import {Ipost} from '../ipost';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {PostService} from '../post.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  postList: Ipost[] = [];
  postForm: FormGroup;

  constructor(
    private postService: PostService,
    private fb: FormBuilder) { }
    ngOnInit() {
      this.postForm = this.fb.group({
        title: ['', [Validators.required, Validators.minLength(10)]],
        body: ['', [Validators.required, Validators.minLength(10)]],
      });
      this.postService
        .getPosts()
        .subscribe(next => (this.postList = next), error => (this.postList = []));
    }
    delete(id: number) {
      this.postService.deletePost(id).subscribe(() => {
        this.postList = this.postList.filter(post => post.id !== id);
      });
    }
    onSubmit() {
      if (this.postForm.valid) {
        this.addBlog();
      }
    }
    addBlog() {
      const newPost: Partial<Ipost> = {
        title: this.postForm.value.title,
        body: this.postForm.value.title
      };
      console.log(this.postForm);
      this.postService.createPost(newPost).subscribe(next => {
        this.postList.unshift(next);
        this.postForm.reset({
          title: '',
          body: ''
        });
      });
    }


}
