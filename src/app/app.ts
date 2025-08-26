import { AfterViewInit, Component, ElementRef, OnInit, signal, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App implements OnInit {
  protected readonly title = signal('chucEmLinhNn');

  @ViewChild('typewriterText') typewriterText!: ElementRef<HTMLParagraphElement>;
  public message: string = '';
  public isClick: boolean = true;
  public hiddenText: boolean = true;
  public secretMessage: string =
    'Ngày 26/08/2025, anh lại ngồi viết những dòng này cho em, nhưng nhận được tin nhắn rằng em không thích kiểu tán như thế này. Thật tuyệt! :)' +
    'Có lẽ em sẽ không nhấn vào đường link này lần thứ hai và đọc được những điều anh đang viết. Nhưng nếu may mắn, em đọc được, anh chỉ muốn mượn em một chút từ 7 -> 9 giờ tối để mời em đi uống nước hoặc xem một bộ phim, chỉ để hiểu em hơn một chút.' +
    'Nếu em đồng ý, đừng ngại bắn cho anh 1 tí hint nhé.';
  displayText = '';

  ngOnInit(): void {
    console.log('55', this.message);
  }

  sendWishes() {
    this.isClick = false;
    this.message = `Chúc crush Thảo Linh Phú Thọ sớm có được a nhé 8386 mãi đỉnh 😴✨. Thật vui khi e ghé lại trang web này =)) vậy là a sẽ có cơ hội mong manh để e chú ý hơn`;
  }

  text() {
    this.hiddenText = false;
  }

  startTyping() {
    this.hiddenText = false;
    this.displayText = '';
    let index = 0;
    const interval = setInterval(() => {
      this.displayText += this.secretMessage[index];
      index++;
      if (index === this.secretMessage.length) {
        clearInterval(interval);
      }
    }, 200); // tốc độ gõ 150ms/char
  }
}
