import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {LikeComponent} from './like.component';

@Component({
	selector: 'twitter',
	templateUrl: 'app/twitter.template.html',
    directives: [LikeComponent]
})
export class TwitterComponent {
    @Input() title : string = '';
    
    @Input() text : string = '';
    
    @Input() imageUrl : string = ''; 
    
    @Input() isFavorite : boolean = false;
    
    @Input() totalLikes : number = 0; 
}