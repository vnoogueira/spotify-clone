import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  constructor(
    private spotityService :  SpotifyService
  ) {}

  ngOnInit(): void {
    this.verificarTokenCallback();
  }

  verificarTokenCallback(){
    const token = this.spotityService.obterTokenUrlCallback();
    if(!!token){
      this.spotityService.defineAccessToken(token);
    }
  }

  openPageLogin(){
   window.location.href = this.spotityService.obterUrlLogin();
  }
}
