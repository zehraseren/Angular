import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CardComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
})
export class AppComponent {
  posts = [
    {
      title: 'Doğa Yürüyüşü',
      imageUrl:
        'https://images.pexels.com/photos/1632790/pexels-photo-1632790.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      username: 'zsnature',
      userPhoto:
        'https://images.pexels.com/photos/3856030/pexels-photo-3856030.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      content:
        'Doğa yürüyüşü, doğanın içinde huzurlu bir şekilde yürüyüş yaparak zihinsel ve fiziksel sağlık sağlayan keyifli bir etkinliktir.',
    },
    {
      title: 'Dağ Bisikleti',
      imageUrl:
        'https://img.redbull.com/images/c_limit,w_1500,h_1000/f_auto,q_auto/redbullcom/2021/10/7/sj363ox1vkujnw5j9wjj/dag-bisikleti-rotalari',
      username: 'zsclimbing',
      userPhoto:
        'https://www.datocms-assets.com/64859/1652954749-fotografci-olmayi-istemek-gerek-1.jpg?q=70&auto=format&w=1280',
      content:
        'Dağ bisikleti, engebeli arazide hız ve beceri gerektiren, adrenalini yüksek bir açık hava sporudur.',
    },
    {
      title: 'Tırmanış',
      imageUrl:
        'https://media-cdn.t24.com.tr/media/posts/2018/12/raw_bir-geri-donme-cabasi-sekiz-dag_303856149.jpg',
      username: 'zshiking',
      userPhoto:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGRZf4_QX2ZuuryVDsqJxcJo6ryYwWRglCNg&s',
      content:
        'Tırmanış, zorlu kaya yüzeylerini veya dağları aşarak güç ve dayanıklılığı test eden heyecan verici bir spor dalıdır.',
    }
  ];
}
