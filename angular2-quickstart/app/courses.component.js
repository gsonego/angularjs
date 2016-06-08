System.register(['angular2/core', './course.service', './auto-grow.directive'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, course_service_1, auto_grow_directive_1;
    var CoursesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (course_service_1_1) {
                course_service_1 = course_service_1_1;
            },
            function (auto_grow_directive_1_1) {
                auto_grow_directive_1 = auto_grow_directive_1_1;
            }],
        execute: function() {
            CoursesComponent = (function () {
                function CoursesComponent(courseService) {
                    this.title = 'Title for the courses page';
                    this.subTitle = 'Subtitle for the courses';
                    this.imageUrl = 'http://lorempixel.com/400/200/';
                    this.selected = false;
                    this.customText = 'Hello world';
                    this.courses = courseService.getCourses();
                }
                CoursesComponent.prototype.onStarClick = function () {
                    this.selected = !this.selected;
                };
                CoursesComponent.prototype.onClick = function ($event) {
                    console.log("customText:" + this.customText);
                    this.customText = "Hello from button";
                    $event.stopPropagation();
                };
                CoursesComponent.prototype.onSpanClick = function () {
                    console.log("Clicked on span");
                };
                CoursesComponent = __decorate([
                    core_1.Component({
                        selector: 'courses',
                        template: "\n\t\t\t\t<h2>Courses</h2>\n\t\t\t\t<h3>{{ title }}</h3>\n\t\t\t\t<h2 [textContent]=\"subTitle\"></h2>\n\t\t\t\t<img [src]=\"imageUrl\" />\n\t\t\t\t<input type=\"text\" autoGrow [value]=\"customText\" (input)=\"customText = $event.target.value\" />\n\t\t\t\t<input type=\"text\" [(ngModel)]=\"customText\" />\n\t\t\t\tText: {{ customText }}\n\t\t\t\t<span (click)=\"onSpanClick()\">\n\t\t\t\t\t<button (click)=\"onClick($event)\">Save</button>\n\t\t\t\t</span>\n\t\t\t\t<div [style.backgroundColor]=\"selected ? 'yellow' : 'red'\">\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t<li *ngFor=\"#course of courses\">\n\t\t\t\t\t\t\t{{ course }}\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t   ",
                        providers: [course_service_1.CourseService],
                        directives: [auto_grow_directive_1.AutoGrowDirective]
                    }), 
                    __metadata('design:paramtypes', [course_service_1.CourseService])
                ], CoursesComponent);
                return CoursesComponent;
            }());
            exports_1("CoursesComponent", CoursesComponent);
        }
    }
});
//# sourceMappingURL=courses.component.js.map