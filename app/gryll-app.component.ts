import {Component} from 'angular2/core';
import {ChatDisplayComponent} from './gryll-display.component';
import {ChatInputComponent} from './gryll-input.component'

@Component({
    selector: 'gryll-app',
    template : `
        <div class="container">
            <h3 class="text-center">Adventure</h3>
            <div [hidden]="!hasUsername">
				<div class="row">
					<gryll-display></gryll-display>
				</div>
			 
				<div class="row">
					<gryll-input [username]="username"></gryll-input>
				</div>
			</div>
			<div [hidden]="hasUsername">
				<div class="input-group">
					<input [(ngModel)]="username" class="form-control" (keypress)="verifyKey($event)" type="text" placeholder="Insert your username here…">
					<span class="input-group-btn">
						<button class="btn btn-primary" type="button" (click)="register()">Register</button>
					</span>
				</div>
			</div>
        </div>
    `,
    directives : [GryllDisplayComponent, GryllInputComponent]
})

export class GryllAppComponent { 
	private username : string;
	private hasUsername = false;
	
	register() {
		if(this.username) {
			this.hasUsername = true;
		} else {
			this.hasUsername = false;
		}
	}

	verifyKey(event) {
		if(event.keyCode == 13) {
			this.register();
		}
	}
}