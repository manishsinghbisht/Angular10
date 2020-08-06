import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';
@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  public selectedId;
  departments = [
    {
      "Id": 1,
      "name": "Angular",
      "rating": 30
    },
    {
      "Id": 2,
      "name": "Node",
      "rating": 31
    },
    {
      "Id": 3,
      "name": "MongoDB",
      "rating": 32
    },
    {
      "Id": 4,
      "name": "C#",
      "rating": 33
    },
    {
      "Id": 5,
      "name": "Python",
      "rating": 40
    },
    {
      "Id": 6,
      "name": "Go",
      "rating": 13
    }
  ];
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.selectedId = id;
    });
  }

  onSelect(department){
    //this.router.navigate(['/departments', department.Id]);
    this.router.navigate([department.Id], {relativeTo: this.route});
  }

  isSelected(department){
    return department.Id === this.selectedId;
  }
}
