import {Component} from 'angular2/core';
import {TwitterComponent} from './twitter.component';

@Component({
    selector: 'my-app',
    template: `
                <h1>My First Angular 2 App</h1>
                <div class="tweet-panel">
                    <twitter 
                        [title]="tweet.title" 
                        [text]="tweet.text"
                        [imageUrl]="tweet.imageUrl"
                        [totalLikes]="tweet.totalLikes">
                    </twitter>
                </div>
              `,
    directives: [TwitterComponent]
})
export class AppComponent { 
    tweet = {
        title : "Meu Tweet",
        author: "@gsonego_br",
        text: "Lorem ipsum...",
        imageUrl: "http://lorempixel.com/100/100/people",
        iLike: false,
        totalLikes: 8
    };
    
}