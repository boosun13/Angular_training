import { Component } from '@angular/core';

@Component({
// コンポーネントを識別する名前、呼び出すタグの名前<app-root>として取り扱える 
  selector: 'app-root',
//同階層、CSSは配列
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
//変数として使える
  title = 'Hello Angular!';
  main = 'chinchin';
  isAngular = true
  isAngular2 = 'angular'
}
