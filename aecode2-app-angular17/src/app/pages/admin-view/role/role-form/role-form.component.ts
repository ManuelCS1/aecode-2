import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Role } from '../../../../models/role';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RoleService } from '../../../../core/services/role.service';

@Component({
  selector: 'app-role-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './role-form.component.html',
  styleUrl: './role-form.component.css',
})
export class RoleFormComponent implements OnChanges, OnInit {
  @Input() data: Role | null = null;
  roleList: Role[] = [];
  Role!: Role;
  roleForm: FormGroup;

  constructor(
    private fb: FormBuilder,

    private roleService: RoleService
  ) {
    this.roleForm = this.fb.group({
      role_name: new FormControl('', [Validators.required]),
      role_description: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.getRoles();
  }

  ngOnChanges(): void {
    if (this.data) {
      this.roleForm.patchValue({
        fullname: this.data.role_name,
        username: this.data.role_description,
      });
    }
  }

  onSubmit() {
    if (this.roleForm.valid) {
      if (this.data) {
        this.roleService
          .updateRole(this.data.id_role as number, this.roleForm.value)
          .subscribe({
            next: (response) => {
              console.log('Role updated successfully!');
            },
          });
      } else {
        this.roleService.createRole(this.roleForm.value).subscribe({
          next: (response) => {
            console.log('Role created successfully!');
          },
        });
      }
    } else {
      this.roleForm.markAllAsTouched();
    }
  }

  getRoles() {
    this.roleService.getAllRoles().subscribe({
      next: (response) => {
        this.roleList = response;
        console.log(response);
      },
    });
  }

  getRole(id: number) {
    this.roleService.getRole(id).subscribe({
      next: (response) => {
        this.Role = response;
        console.log(response);
      },
    });
  }
}
