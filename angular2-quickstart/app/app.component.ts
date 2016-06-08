import {Component} from 'angular2/core';
import {FavoriteComponent} from './favorite.component';
import {LikeComponent} from './like.component';
import {VoteComponent} from './voter.component';

@Component({
    selector: 'my-app',
    template: `
                <h1>My First Angular 2 App</h1>
                <favorite [isFavorite]="post.isFavorite" (change)="onFavoriteChange($event)"></favorite>
                <hr />
                <like [iLike]="post.iLike" [totalLikes]="post.totalLikes"></like>
                <hr />
                <voter 
                    [voteCount]="post.voteCount" 
                    [myVote]="post.myVote"
                    (vote)="onVote($event)"
                    >
                </voter>
              `,
    directives: [FavoriteComponent, LikeComponent, VoteComponent]
})
export class AppComponent { 
    post = {
        title : "My Post Title",
        isFavorite : true,
        voteCount : 10,
        myVote : 0,
        iLike : false,
        totalLikes : 15
    };
    
    onVote($event) {
        console.log($event);
    }
    
    onFavoriteChange($event) {
        console.log($event)
    }
}