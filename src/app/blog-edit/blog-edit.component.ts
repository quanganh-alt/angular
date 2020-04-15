import { Component, OnInit } from '@angular/core';
import {Ipost} from '../ipost';
import {ActivatedRoute, Router, RouterLinkActive} from '@angular/router';
import {PostService} from '../post.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {
  post: Ipost;
  updateForm: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
     this.updateForm = this.fb.group({
      title: ['', [ Validators.minLength(10), Validators.required]],
      body: ['', [ Validators.minLength(10), Validators.required]]
    })
     const id = Number(this.route.snapshot.paramMap.get('id'));
     this.postService.getPostID(id).subscribe(next => {
      this.post = next;
    });
  }
  onUpdate() {
    if (this.updateForm.valid) {
      const {value} = this.updateForm;
      const data = {
        ...this.post,
        ...value
      };
    }
    const newPost: Partial<Ipost> = {
      title: this.updateForm.value.title,
      body: this.updateForm.value.body
    };

    this.postService.updatePost(newPost).subscribe(
      next => {
        this.router.navigate(['/blog']);
      }, error => {console.log(error); }
    );
  }

}
