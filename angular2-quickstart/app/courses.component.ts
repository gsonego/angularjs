import {Component} from 'angular2/core';
import {CourseService} from './course.service';
import {AutoGrowDirective} from './auto-grow.directive';

@Component({
	
	selector : 'courses',
	template : `
				<h2>Courses</h2>
				<h3>{{ title }}</h3>
				<h2 [textContent]="subTitle"></h2>
				<img [src]="imageUrl" />
				<input type="text" autoGrow [value]="customText" (input)="customText = $event.target.value" />
				<input type="text" [(ngModel)]="customText" />
				Text: {{ customText }}
				<span (click)="onSpanClick()">
					<button (click)="onClick($event)">Save</button>
				</span>
				<div [style.backgroundColor]="selected ? 'yellow' : 'red'">
					<ul>
						<li *ngFor="#course of courses">
							{{ course }}
						</li>
					</ul>
				</div>
			   `,
    providers: [CourseService],
	directives: [AutoGrowDirective]
})
export class CoursesComponent {
	title : string = 'Title for the courses page';
	subTitle : string = 'Subtitle for the courses';
	imageUrl : string = 'http://lorempixel.com/400/200/';
	selected : boolean = false;
	customText: string = 'Hello world';
	courses : string[];
	
	constructor(courseService : CourseService) {
		this.courses = courseService.getCourses();	
	}
	
	onStarClick() {
		this.selected = !this.selected;
	}
	
	onClick($event) {
		console.log("customText:" + this.customText);
		this.customText = "Hello from button";
		$event.stopPropagation();
	}
	
	onSpanClick() {
		console.log("Clicked on span");	
	}
}