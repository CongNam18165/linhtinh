import { AfterViewInit, Component, OnInit, signal } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit,AfterViewInit{
  protected readonly title = signal('chucEmLinhNn');

  public message: string = '';
  public isClick: boolean = true;
  ngOnInit(): void {
    console.log('55', this.message);
  }

  sendWishes() {
    this.isClick= false;
    this.message = `Hôm nay e đã vất vả rồi.Chúc em Thảo Linh Phú Thọ ngủ thật ngon 8386 nhé 😴✨.`;
  }
ngAfterViewInit() {
  const audio = document.getElementById('audioPlayer') as HTMLAudioElement;

  // Force autoplay after short delay (fix Chrome blocking autoplay)
  setTimeout(() => {
    audio?.play().catch(err => {
      console.warn('Autoplay blocked:', err);
    });
  }, 500);
}
}
